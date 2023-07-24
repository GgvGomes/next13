interface ProductProps {
  params: { id: string };
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
