type Hooks = {
  ready?: (registration: any) => Hooks;
  registered?: (registration: any) => Hooks;
  cached?: (registration: any) => Hooks;
  updated?: (registration: any) => Hooks;
  updatefound?: (registration: any) => Hooks;
  offline?: () => Hooks;
  error?: (error: Error) => Hooks;
};

export function register(swUrl: string, registrationOptions: ServiceWorkerRegistration): Hooks;

export function unregister(): void;
