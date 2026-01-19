export default async function Deshboard({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <>
      <h1> Details about {productId} </h1>
    </>
  );
}
