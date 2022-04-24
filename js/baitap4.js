//Bài 4

/**
 * Khối 1: input
 *    rong
 *    dai
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *          Nếu dai > 0 && rong > 0:
 *              s = dai * rong
 *              p = (dai + rong) * 2
 *          Ngược lại: thông báo dữ liệu nhập vào không hợp lệ
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    s (diện tích)
 *    p (chu vi)
 */

function tinhChuViDienTich () {
    var dai = document.getElementById("dai").value;
    var rong = document.getElementById("rong").value;
    console.log(dai, rong);
    var s = 0;
    var p = 0;
    if (dai > 0 && rong > 0) {
        s = dai * rong;
        p = (dai + rong) * 2;
        document.getElementById("SP").innerHTML = "Hình chử nhật với chiều dài " + dai +", chiều rộng " + rong + " có: <br>"  + "Diện tích: " + s.toFixed(2) + "<br>Chu vi: " + p.toFixed(2) ;
    }else {
        document.getElementById("SP").innerHTML = "Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại";
    }
}


