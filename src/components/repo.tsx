export async function Repo() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Colocando algo para parar a aplicação

  return (
    <div style={{ display: "grid" }}>
      <h1>Repo</h1>
    </div>
  );
}
