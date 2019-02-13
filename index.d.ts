export type Hooks = {
  ready?: (registration: any) => Hooks;
  registered?: (registration: any) => Hooks;
  cached?: (registration: any) => Hooks;
  updated?: (registration: any) => Hooks;
  updatefound?: (registration: any) => Hooks;
  offline?: () => Hooks;
  error?: (error: Error) => Hooks;
};

export type RegisterationOptions = object

export function register(swUrl: string, registerationOptions: RegisterationOptions): Hooks;

export function unregister(): void;
