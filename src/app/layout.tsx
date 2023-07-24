import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Estutura de repeticao nas telas
// Literalmente o root
// Tudo se repete na pagina, ele n recarrega nas trocas de rotas
// Cada pagina pode ter um layout diferente tbm, so n colocar RootLayout, mas UserLayout, por exemplo
// Os layout se concatenam, se tiver um RootLayout e um UserLayout, o UserLayout vai ficar dentro do RootLayout => Deve ficar dentro de uma pasta depois chamar um arquivo
// Uma pasta pode conter uma subpasta tranquilo
// Para usar uma pasta sem ela afetar a url é so colocar entre parenteses (auth)
// Head se é da msm forma

// É possivel adicionar um Loading tbm => Isso é massa demais
// Loading herda o layout
// Da pra criar eskeletons tbm -> Divs cinzas que ficam carregando
// Por isso é massa cada tela ter seu loading, pq da pra fazer um loading diferente pra cada tela
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
