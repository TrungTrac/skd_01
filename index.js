function compareTriplets(a,b){
    result = [0,0];
    for(let i=0; i<3;i++){
        // điều kiện a và b nằm trong khoản từ 1-100
        if(a[i]>=100||a[i]<1||b[i]>=100||b[i]<1){
             return
        }
        // so sánh điểm 
        if(a[i]>b[i]){
            result[0]++
        }else if(a[i]<b[i]){
            result[1]++
        }
    }
    return result
}
a = [1,8,3]
b = [5,16,48]
//kết quả [0,3]
compareTriplets(a,b)