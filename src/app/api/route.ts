import prisma from "@/database/prismaSingleton"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
	if (request.headers.get("Content-Type") != "application/json")
		return new Response("Content-Type should be \"application/json\"", { status: 415, statusText: "Unsupported Media Type" })

	const productsArray = await prisma.products.findMany()
	return new Response(JSON.stringify(productsArray))
}