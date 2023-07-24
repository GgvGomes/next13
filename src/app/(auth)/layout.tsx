export const metadata = {
  title: {
    default: "Auth",
    template: "%s | Auth", // Vai concatenar o titulo com o template
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Auth</h1>
        {children}
      </body>
    </html>
  );
}
