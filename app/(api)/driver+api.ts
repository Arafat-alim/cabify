import { neon } from "@neondatabase/serverless";

// ! Help us to fetch the APIs
export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const response = await sql(`SELECT * from drivers`);

    return Response.json(
      {
        data: response,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("Error occured while fetching drivers data", error);
    return Response.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
