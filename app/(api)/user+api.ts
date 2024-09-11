import { neon } from "@neondatabase/serverless";

export const POST = async (request: Request) => {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await request.json();

    // const posts = await sql("SELECT * FROM posts");

    if (!name || !email || !clerkId) {
      return Response.json(
        {
          error: "Missing fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const response = await sql`
  INSERT INTO users (
    name,
    email,
    clerk_id
  )
    VALUES (
        ${name},
        ${email},
        ${clerkId}
    )
  
  `;

    return new Response(JSON.stringify({ data: response }), { status: 200 });
  } catch (err: any) {
    console.log("Error while creating a User: ", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
