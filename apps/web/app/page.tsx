import { client } from "@repo/db/client";

export default async function Home() {
  try {
    const user = await client.user.findFirst();
    console.log("User fetched:", user);

    return (
      <div>
        First name: {user?.username}
        password: {user?.password}
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user data</div>;
  }
}