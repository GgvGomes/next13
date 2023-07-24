interface ProductProps {
  params: { id: string };
}

// Dinamic Metadata
export async function generateMetadata({params}: ProductProps) {
  return {
    title: `Product: ${params.id}`,
  };
} 

// [...], [[]] -> Subnivel
export default function Product({ params }: ProductProps) {
  const { id } = params;

  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}
