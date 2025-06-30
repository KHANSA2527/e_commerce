
type tParams = Promise<{ slug: string[] }>;

import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { getProductBySlug } from "@/get-api-data/product";
import { useParams } from "next/navigation";

const page = async (props: { params: tParams }) => {

  const { slug }: { slug: any } = await props.params;
  console.log("slug==========", slug);
  
  if (!slug) {
    return    
  }
 
  

  const productDetails = await getProductBySlug(slug);
    
        console.log("productDetails======+++++++++", productDetails);

  return (
    <>
    <ProductDetails productDetails ={productDetails}/>
    </>
  );
};

export default page;
