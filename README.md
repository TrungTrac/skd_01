## Bước 1 dịch yêu cầu sang tiếng Anh
Alice và Bob mỗi người tạo ra một bài toán cho Glams. Một người đánh giá đã chấm điểm cho hai thử thách này, cho điểm trên thang điểm từ 1 đến 100 cho ba tiêu chí: độ rõ ràng của vấn đề, tính nguyên bản và độ khó.

Điểm của bài toán của Alice là mảng có 3 phần tử a = (a[0], a[1], a[2]), và điểm của bài toán của Bob là mảng có 3 phần tử b = (b[0], b[1], b[2]).

Nhiệm vụ là tìm điểm so sánh của họ bằng cách so sánh a[0] với b[0], a[1] với b[1] và a[2] với b[2].

Nếu a[i] > b[i], thì Alice được 1 điểm.
Nếu a[i] < b[i], thì Bob được 1 điểm.
Nếu a[i] = b[i], thì không ai nhận được điểm nào.
Điểm so sánh là tổng số điểm mà một người kiếm được.
Cho a và b, hãy xác định điểm so sánh tương ứng của họ.

Ví dụ

a = [1, 2, 3]
b = [3, 2, 1]
Đối với các phần tử 0, Bob được tính 1 điểm vì a[0] < b[0].
Đối với các phần tử bằng nhau a[1] và b[1], không có điểm nào được tính.
Cuối cùng, đối với các phần tử 2, a[2] > b[2] nên Alice nhận được 1 điểm.
Mảng trả về là [1, 1] với điểm của Alice trước và của Bob sau.

Mô tả hàm

Hoàn thành hàm compareTriplets dưới đây.

compareTriplets có các tham số sau:
int a[3]: điểm đánh giá thử thách của Alice
int b[3]: điểm đánh giá thử thách của Bob

Trả về

int[2]: Điểm của Alice nằm ở vị trí đầu tiên, và điểm của Bob ở vị trí thứ hai.

Định dạng đầu vào

Dòng đầu tiên chứa 3 số nguyên cách nhau bởi dấu cách, a[0], a[1], và a[2], các giá trị tương ứng trong mảng có 3 phần tử a.
Dòng thứ hai chứa 3 số nguyên cách nhau bởi dấu cách, b[0], b[1], và b[2], các giá trị tương ứng trong mảng có 3 phần tử b.

Ràng buộc

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

Ví dụ đầu vào 0
5 6 7
3 6 10
Đầu ra mẫu 0
1 1

Ví dụ đầu vào 1
17 28 30
99 16 8
Đầu ra mẫu 1
2 1

## Bước 2 tạo 10 test case
Ví dụ đầu vào 1
7 3 7
8 4 10
Đầu ra mẫu 1
0 3

Ví dụ đầu vào 2
10 2 3
99 16 1
Đầu ra mẫu 2
1 2

Ví dụ đầu vào 4
9 4 7
3 6 10
Đầu ra mẫu 4
1 2

Ví dụ đầu vào 5
5 4 9
9 1 8
Đầu ra mẫu 5
2 1

Ví dụ đầu vào 6
7 6 4
3 5 10
Đầu ra mẫu 6
2 1

Ví dụ đầu vào 7
1 8 3
5 16 48
Đầu ra mẫu 7
0 3

Ví dụ đầu vào 8
1 2 3
5 6 7

Đầu ra mẫu 8
0 3

Ví dụ đầu vào 9
17 28 30
6 7 8
Đầu ra mẫu 9
3 0

Ví dụ đầu vào 10
5 2 10
3 6 10

Đầu ra mẫu 10
1 1

Ví dụ đầu vào 11
97 2 3
97 5 8
Đầu ra mẫu 11
0 2

## Bài tập 2
Cho một mảng số nguyên, tính toán tỷ lệ các phần tử dương, âm và bằng 0. In giá trị thập phân của mỗi tỷ lệ trên một dòng mới với 6 chữ số thập phân.

Lưu ý: Câu trả lời cuối cùng phải có 6 chữ số sau dấu thập phân, ví dụ: 0.123456.

Ví dụ:
Arr = [1, 1, 0, -1, -1]
Có n = 5 phần tử, hai phần tử dương, hai phần tử âm và một phần tử bằng 0. Tỷ lệ của chúng là 2/5 = 0.400000, 2/5 = 0.400000 và 1/5 = 0.200000. Kết quả được in ra như sau:

0.400000
0.400000
0.200000
Mô tả hàm:
Hoàn thành hàm plusMinusZero. Hàm plusMinusZero có tham số sau:

int arr[n]: một mảng số nguyên
In:
In tỷ lệ các giá trị dương, âm và bằng 0 trong mảng. Mỗi giá trị nên được in trên một dòng riêng biệt với 6 chữ số thập phân.

Định dạng đầu vào:
Dòng đầu tiên chứa một số nguyên, n, kích thước của mảng. Dòng thứ hai chứa n số nguyên cách nhau bởi khoảng trắng mô tả arr[n].

Ràng buộc:
0 < n ≤ 100
-100 ≤ arr[i] ≤ 100
Định dạng đầu ra:
In ra 3 dòng, mỗi dòng có giá trị thập phân với 6 chữ số sau dấu thập phân:

tỷ lệ các giá trị dương
tỷ lệ các giá trị âm
tỷ lệ các giá trị bằng 0
Đầu vào mẫu:
diff
Copy code
6
-4 3 -9 0 4 1
Đầu ra mẫu:
0.500000
0.333333
0.166667