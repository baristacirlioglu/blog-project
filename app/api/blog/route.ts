import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    
    const posts = [
        {id: 1, title: "İstanbul", content: "İstanbul Marmara bölgesindedir."},
        {id: 2, title: "Ankara", content: "Ankara İç Anadolu bölgesindedir."},
        {id: 3, title: "Adana", content: "Adana Akdeniz bölgesindedir"}
    ];

    return new Response(JSON.stringify(posts),{
        status: 200,
        headers: { "Content-Type": "application/json" },
    })

}