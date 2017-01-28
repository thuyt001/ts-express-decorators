
import Metadata from "./metadata";
import {UNKNOW_SERVICE} from "../constants/errors-msgs";
import {IProvider} from "../interfaces/Provider";
import {getClass, getClassName} from "../utils";
import {IInjectableMethod} from "../interfaces/InjectableMethod";

/**
 * InjectorService manage all service collected by `@Service()` decorator.
 */
export default class InjectorService {

    private static providers: Map<Function, any> = new Map<Function, any>();

    /**
     * Invoke the target class or function.
     * @param target
     * @param locals
     * @param designParamTypes
     */
    public invoke<T>(target: any, locals: Map<Function, any> = new Map<Function, any>(), designParamTypes?: any[]): T {
        return InjectorService.invoke<T>(target, locals, designParamTypes);
    }

    /**
     * Invoke a method and try to inject services.
     * @returns {any}
     * @param handler
     * @param options
     */
    public invokeMethod(handler: any, options?: IInjectableMethod | any[]): any {
        return InjectorService.invokeMethod(handler, options);
    }

    /**
     * Return the instance service/factory.
     * @param target
     * @returns {boolean}
     */
    public get<T>(target: any): T {
        return InjectorService.get<T>(target);
    }

    /**
     * Return true if the target provider exists and has an instance.
     * @param target
     * @returns {boolean}
     */
    public has(target): boolean {
        return InjectorService.has(target);
    }

    /**
     * Invoke the target class or function.
     * @param target
     * @param locals
     * @param designParamTypes
     */
    static invoke<T>(target: any, locals: Map<string|Function, any> = new Map<Function, any>(), designParamTypes?: any[]): T {

        if (!designParamTypes) {
            designParamTypes = Metadata.getParamTypes(target);
        }

        const services = designParamTypes
            .map((serviceType: any) => {

                const serviceName = typeof serviceType === "function" ? getClassName(serviceType) : serviceType;

                /* istanbul ignore next */
                if (locals.has(serviceName)) {
                    return locals.get(serviceName);
                }

                if (locals.has(serviceType)) {
                    return locals.get(serviceType);
                }

                /* istanbul ignore next */
                if (!this.has(serviceType)) {
                    throw Error(UNKNOW_SERVICE(getClassName(target) + " > " + serviceName));
                }

                return this.get(serviceType);
            });

        return new target(...services);
    }

    /**
     * Invoke a method and try inject to inject service.
     * @returns {any}
     * @param handler
     * @param options
     */
    static invokeMethod(handler: any, options?: IInjectableMethod | any[]) {

        let designParamTypes, target, methodName, locals = new Map<Function, any>();

        if (options instanceof Array) {
            designParamTypes = options as Array<any>;
        } else {
            designParamTypes = options.designParamTypes;
            target = options.target;
            methodName = options.methodName;
            locals = options.locals || locals;
        }

        if (!designParamTypes) {
            designParamTypes = Metadata.getParamTypes(target, methodName);
        }

        const services = designParamTypes
            .map((serviceType: any) => {

                const serviceName = typeof serviceType === "function" ? getClassName(serviceType) : serviceType;

                /* istanbul ignore next */
                if (locals.has(serviceName)) {
                    return locals.get(serviceName);
                }

                if (locals.has(serviceType)) {
                    return locals.get(serviceType);
                }

                /* istanbul ignore next */
                if (!this.has(serviceType)) {
                    return undefined;
                }

                return this.get(serviceType);

            });

        return handler(...services);
    }

    /**
     * Construct the service with his dependencies.
     * @param target The service to be built.
     */
    static construct(target): InjectorService {

        const provider: IProvider = this.providers.get(getClass(target));

        /* istanbul ignore else */
        if (provider.instance === undefined || provider.type === "service") {

            provider.instance = this.invoke<any>(provider.useClass);

            // $log.debug("[TSED]", getClassName(target), "instantiated");
        }


        return this;
    }

    /**
     * Set a new provider from providerSetting.
     * @param provider class token.
     * @param instance Instance
     */
    static set(provider: IProvider | any, instance?: any): InjectorService {

        let target;

        if (provider["provide"] === undefined) {

            target = provider;

            provider = <IProvider>{
                provide: target,
                useClass: target,
                instance: instance || target,
                type: "factory"
            };

        } else {
            target = provider.provide;
        }

        provider = Object.assign(
            InjectorService.providers.get(getClass(target)) || {},
            provider
        );

        InjectorService.providers.set(getClass(target), provider);

        return InjectorService;
    }

    /**
     * Return the instance service/factory.
     * @param target
     * @returns {boolean}
     */
    static get = <T>(target): T => InjectorService.providers.get(getClass(target)).instance;

    /**
     * Return true if the target provider exists and has an instance.
     * @param target
     * @returns {boolean}
     */
    static has = (target): boolean => InjectorService.providers.has(getClass(target)) && !!InjectorService.get(target);

    /**
     * Initialize injectorService and load all services/factories.
     */
    static load() {

        this.providers
            .forEach((provider: IProvider) => {
                InjectorService.construct(provider.provide);
            });

    }

    /**
     * Add a new service that will built when InjectorService will be loaded.
     */
    static service = (target: any) => InjectorService.set({provide: target, useClass: target, type: "service"});

    /**
     * Add a new factory.
     */
    static factory = (target: any, instance: any) => InjectorService.set({provide: target, useClass: target, instance: instance, type: "factory"});

}

/**
 * Create the first service InjectorService
 */
InjectorService.factory(InjectorService, new InjectorService());