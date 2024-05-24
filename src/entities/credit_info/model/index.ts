interface ICondition {
  id: number;
  title: string;
  text: string;
}

interface ICreditInfo {
  title: string;
  description: string;
  conditions: ICondition[];
}

export type { ICreditInfo };
