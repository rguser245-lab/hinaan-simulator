const vscode = require('vscode');

// Daftar kalimat hinaan (bisa kamu tambah sendiri sekreatif mungkin)
const daftarHinaan = [
    "lu tolol apa gimana? Bot juga lebih pinter dari lu.",
    "otak lu di kepala atau di pantat? Error semua itu.",
    "kayaknya jadi pengusaha lele cocok buat lu bro. Jangan maksain coding.",
    "Ini error-nya banyak banget, kayak masalah hidupmu.",
    "Syntax error mulu. Kemarin lulusan jalur giveaway ya?",
    "Komputer kamu menangis melihat kode ampas ini.",
	"mending lu jual laptop lu, daripada ngoding gini terus.",
	"logika lu setara sama kera yang lagi mabok. Error mulu.",
	"udah gak ada masa depan lagi buat lu tiap baris merah mulu.",
	"coding lu kayak nulis puisi, tapi puisi yang jelek banget.",
	"GOBLOK YA ELU, kaya gini aja gak bisa"
];

function activate(context) {
    console.log('Ekstensi "Hinaan Simulator" aktif!');

    // Event listener: Berjalan setiap kali ada perubahan pada file atau error diagnostics
    let diagnosticListener = vscode.languages.onDidChangeDiagnostics((e) => {
        // Cek apakah ada error baru di dokumen yang sedang aktif
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const uri = activeEditor.document.uri;
            const diagnostics = vscode.languages.getDiagnostics(uri);

            // Cari apakah ada diagnostic yang tipenya 'Error'
            const punyaError = diagnostics.some(d => d.severity === vscode.DiagnosticSeverity.Error);

            if (punyaError) {
                // Ambil hinaan secara acak
                const randomHinaan = daftarHinaan[Math.floor(Math.random() * daftarHinaan.length)];
                
                // Munculkan sebagai pesan peringatan di pojok kanan bawah VS Code
                vscode.window.showErrorMessage(`🚨 [System]: ${randomHinaan}`);
            }
        }
    });

    context.subscriptions.push(diagnosticListener);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}