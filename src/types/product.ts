

export type Product = {
  id: number | any;
  title: string;
  price: number;
  discountedPrice?: number | any;
  slug: string;
  quantity: number | any;
  updatedAt: Date;
  reviews: number;
  shortDescription: any;
  productVariants: {
    color: string;
    image: string;
    size: string;
    isDefault: boolean;
  }[];
};


export type IProductByDetails = {
  id: number;
  title: string;
  shortDescription: string;
  description: string | null;
  price: number;
  discountedPrice?: number | null;
  slug: string;
  quantity: number;
  updatedAt: Date;
  category: {
    title: string;
    slug: string;
  } | null;
  productVariants: {
    color: string;
    image: string;
    size: string;
    isDefault: boolean;
  }[];
  reviews: number;
  additionalInformation: {
    name: string;
    description: string;
  }[];
  customAttributes: {
    attributeName: string;
    attributeValues: {
      id: string;
      title: string;
    }[];
  }[];
  body: string | null;
  tags: string[] | null;
  offers: string[] | null;
  sku: string | null;
};

