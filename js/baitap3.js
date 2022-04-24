//Bài 3

/**
 * Khối 1: input
 *    money
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *          Nếu money > 0 : vnd = money * usd
 *          Ngược lại: thông báo dữ liệu nhập vào không hợp lệ
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    vnd
 */

const USD = 23500;

function doiUSD () {
    var money = document.getElementById("usd").value;
    var vnd = 0;
    if (money > 0) {
        vnd = money * USD;
        document.getElementById("tien").innerHTML = money + " USD tương ứng với " + vnd.toLocaleString() + " VND";
    }else {
        document.getElementById("tien").innerHTML = "Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại.            "
    }
}

