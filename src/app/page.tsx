import { Repo } from "@/components/repo";
import { User } from "@/components/user";
import { Suspense } from "react";
import Link from "next/link";

// export const revalidate = 30; // Revalida a pagina toda

export default async function Home() {
  const reponse = await fetch("https://dog.ceo/api/breeds/image/random", {
    // cache: 'force-cache', // Força o cache para ser igual para todos
    cache: "no-store", // Cache p/ cada usuário
    next: {
      revalidate: 30,
    },
  }); // Revalidação a nível de chamada
  const repositories = await reponse.json();

  // Quando usar varias fetch
  // Promise.all([])

  // Agora os components chamam a API na mesma hora, juntos
  // Ele interpreta que é a mesma chamada e realiza o fetch só uma vez
  // Isso faz com q eu possa fazer uma requisição no pai e outra no filho, assim elas interpretam q é a msm e traz o msm resultado

  return (
    <div style={{ display: "grid" }}>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>

      {/* @ts-expect- error Caso tenha algum component assincrono */}

      <pre>{JSON.stringify(repositories, null, 2)}</pre>
      <img src={repositories.message} width={300} height={250} />

      <User />
      <Suspense fallback={<div>Carregando Repositórios...</div>}> {/* Carregamento de component separado => SSR Streaming */}
        <Repo />
      </Suspense>
    </div>
  );
}

// Server-Side Work
// Posso colocar revalidate
// Ou CSR
