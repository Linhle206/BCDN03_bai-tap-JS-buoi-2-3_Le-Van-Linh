// Bài 1

/**
 * Khối 1: input
 *    luong1N (lương 1 ngày)
 *    SN ( số ngày làm)
 * Khối 2:
 *    Bước 1: tạo biến và tạo hàm
 *    Bước 2: xây dựng công thức tính toán
 *          Nếu luong1N > 0 và SN >= 0:  luong = luong1N * SN
 *          Ngược lại: thông báo dữ liệu nhập vào không hợp lệ
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    luong (lương)
 */

function Tluong (){
    var luong1N = document.getElementById("luong1n").value;
    var SN = document.getElementById("songay").value;
    var luong = 0;
    if ( luong1N > 0 && SN >= 0) {
        luong = luong1N * SN;
        document.getElementById("ketqua").innerHTML = "Số lương sau " + SN + " ngày là: " + luong.toLocaleString() + " VND";   
    } else {
        document.getElementById("ketqua").innerHTML = "Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại.";
    }
}

document.getElementById("tinhluong").onclick = Tluong;

