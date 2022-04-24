//Bài 2

/**
 * Khối 1: input
 *    num1
 *    num2
 *    num3
 *    num4
 *    num5
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *    tb = (num1 + num2 + num3 + num4 + num5) / 5
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    tb
 */

function TinhTB () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    tb = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;
    document.getElementById("soTB").innerHTML = "Giá trị trung bình của " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + " là: " + tb.toFixed(2);
}