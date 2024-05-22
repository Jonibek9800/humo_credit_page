interface IConditions {
  id: number;
  title: string;
  text: string;
}

interface IImgAtributes {
  name: string;
  alternativeText: null | string;
  caption: null | string | number;
  width: number;
  heigth: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: null | string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | string;
  createdAt: string;
  updatedAt: string;
}

interface IImg {
  id: number;
  atributes: IImgAtributes;
}

interface IAtributesImg {
  data: IImg[];
}

interface ICreditAtributs {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: IAtributesImg;
  conditions: IConditions[];
}

interface ICreditType {
  id: number;
  attributes: ICreditAtributs;
}

export type { ICreditType };
