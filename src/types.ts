export interface ParamsObject {
  [key: string]: string;
}

export interface Options extends Partial<RequestInit> {
  params?: ParamsObject;
}

export type HandleResponse = (response: Response) => Promise<any>;
