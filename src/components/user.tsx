import { cookies, headers } from "next/headers";

export function User() {
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <div style={{display: 'grid'}}>
      <h1>User</h1>
      {JSON.stringify(userCookies.getAll(), null, 2)}
      {/* {JSON.stringify(userCookies.get('algum'), null, 2)} */}
      <br /><br />
      {JSON.stringify(userHeaders.entries(), null, 2)}
    </div>
  );
}
