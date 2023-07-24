import { cookies, headers } from "next/headers";
// import { useRouter } from "next/router";

export function User() {
  // Uso de cookies ou headers
  const userCookies = cookies();
  const userHeaders = headers();

//   const routers = useRouter();
//   function onSubmit() {
//     routers.push("/dashboard"); // Redireciona para a pagina dashboard
//   }

  return (
    <div style={{ display: "grid" }}>
      <h1>User</h1>
      {JSON.stringify(userCookies.getAll(), null, 2)}
      {/* {JSON.stringify(userCookies.get('algum'), null, 2)} */}
      <br />
      <br />
      {JSON.stringify(userHeaders.entries(), null, 2)}
    </div>
  );
}
