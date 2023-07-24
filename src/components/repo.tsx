export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Colocando algo para parar a aplicação

  // const router = useRouter();
  // router.reload(); // Recarrega a pagina
  // Limpa o cache

  // Prefetch
  // Caso uma rota tenha alguma requisicao e ela contenha um link q aponte pra ela
  // Ele ja faz o prefetch, ou seja, ja faz a requisicao antes de entrar na pagina

  return (
    <div style={{ display: "grid" }}>
      <h1>Repo</h1>
    </div>
  );
}
