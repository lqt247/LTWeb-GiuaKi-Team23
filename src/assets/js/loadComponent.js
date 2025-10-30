// Hàm tải và chèn file HTML vào 1 phần tử nào đó
async function loadComponent(id, filePath) {
    const container = document.getElementById(id);
    if (container) {
        try {
            const response = await fetch(filePath); // Tải nội dung file HTML
            const html = await response.text();     // Đọc nội dung thành text
            container.innerHTML = html;             // Chèn text đó vào trang
        } catch (error) {
            console.error("Không thể tải file:", filePath, error);
        }
    }
}

// Khi trang load xong, tự động gọi hàm để chèn header và footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "../components/header.html");
    loadComponent("footer", "../components/footer.html");
});
