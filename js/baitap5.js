// Bài 5

/**
 * Khối 1: input
 *    num
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *         Nếu 9 < num < 21 hoặc -9 > num > -21: tong = num % 10 + num / 10
 *    
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    tong (tổng 2 kí số)
 */

function tong2KS () {
    var num = document.getElementById("num").value;
    tong = 0;
    if (( 9 < num < 21 || 9 > num > -21)  && ((num - Math.floor(num)) ==0 )) {
        tong = Math.abs(num) % 10 + Math.floor(Math.abs(num) / 10);
        console.log(tong);
        document.getElementById("KQ").innerHTML = "Tổng 2 kí số của số " + num + " là: " + tong;  
    }else {
        document.getElementById("KQ").innerHTML ="Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại"
    }
}