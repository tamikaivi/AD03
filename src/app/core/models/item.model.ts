export enum Status {
  FrontEnd = 'FrontEnd',
  BackEnd = 'BackEnd',
}

export interface Item {
  id: string;
  title: string;
  description: string;
  status: string;
  creation_date: string;
  update_date?: string;
  selected: boolean;
}
