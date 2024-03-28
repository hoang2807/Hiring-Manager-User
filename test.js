// const data = "-Nghiên cứu và xây dựng các công nghệ lưu trữ và dữ liệu (bao gồm dữ liệu có cấu trúc, không có cấu trúc và bán cấu trúc)-Xây dựng, duy trì và phát triển data pipeline-Thực hiện (ETL) bằng cách thu gom, chuyển đổi và đưa dữ liệu tới Data Warehouse thông qua các công cụ như Pentaho Kettle, Talend, Inaplex Inaport-Xây dựng và triển khai các hệ thống Ad Hoc Report, OLAP View, Chấm điểm tín dụng (Credit Scoring), hệ thống Phát hiện bất thường-Phối hợp chặt chẽ với các phòng ban khác để thu thập dữ liệu cho doanh nghiệp, từ đó giúp cho doanh nghiệp cải thiện sản phẩm và đưa ra những quyết định nhanh chóng-Đảm bảo chắc chắn và chính xác các dữ liệu quan trọng của doanh nghiệp-Xác định những tài sản dữ liệu của doanh nghiệp và biết cách sử dụng các công nghệ Big Data như Hadoop Distributed File System, Spark, Hadoop ecosystem, Pig, Sqoop, Kafka, Kinesis-Làm báo cáo số liệu theo yêu cầu"

// console.log(data.split('-').filter(n => n))
const data = {
  username: 'hoang',
  password: 'test'
}
fetch('http://localhost:3000/api/auth-user/signin', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))