import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const data = await fetch(
    "https://chatroom-main-saitodisse.grafbase.app/graphql",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": Deno.env.get("GRAFBASE_API_KEY") as string,
      },
      body: JSON.stringify({
        // https://grafbase.com/docs/database/pagination
        query: `
        query pagination {
          userCollection(first: 5) {
            edges {
              cursor
              node {
                createdAt
                id
                name
                updatedAt
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }`,
      }),
    }
  );

  const jsonData = await data.json();
  return new Response(JSON.stringify(jsonData));
};
