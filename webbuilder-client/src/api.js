import Cookies from "js-cookie";


const BASE_URL ="http://127.0.0.1:8000/api"

export async function api(path, method = "GET", body = null) {
    const response = await fetch(BASE_URL + path, {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${Cookies.get("tokenSaya")}`
        },
        body: body ? JSON.stringify(body) : null,    
    });

    const result = await response.json();
    return { ok: response.ok, status: response.status, result};
}


// Satu fungsi untuk SEMUA panggilan ke API.
//   path   : alamat setelah /api, misalnya "/pages"
//   method : "GET" (bawaan), "POST", "PUT", "DELETE"
//   body   : objek yang dikirim (untuk POST / PUT), boleh kosong
// Hasilnya: { ok, status, result }
//   ok     : true kalau sukses (status 200-299)
//   result : JSON jawaban server, misalnya { data: {...} }