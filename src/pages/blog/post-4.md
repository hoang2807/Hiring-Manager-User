---
layout: "@/layouts/BlogPostLayout.astro"
title: Cách sử dụng cơ bản CSS Variables
date: 2022-12-09
author: Nguyen Hieu
image: { src: "/images/post-4.jpg", alt: "A picture of a coder" }
description: Biến (variables) là một trong những khái niệm cơ bản trong lập trình chắc hẳn ai cũng đã biết. Trong CSS cũng vậy, các biến được khai báo trong CSS selector để xác đinh phạm vi của nó. Các trang web phức tạp hiện nay có số lượng CSS rất lớn, thường có rất nhiều giá trị lặp lại, CSS variables có khả năng làm giảm sử lặp lại đó bằng cách cho phép lưu trữ giá trị biến ở 1 nơi và sau đó được tham chiếu ở một nơi khác.
draft: false
category: CSS
---

## Giới thiệu

Biến (variables) là một trong những khái niệm cơ bản trong lập trình chắc hẳn ai cũng đã biết. Trong CSS cũng vậy, các biến được khai báo trong CSS selector để xác đinh phạm vi của nó. Các trang web phức tạp hiện nay có số lượng CSS rất lớn, thường có rất nhiều giá trị lặp lại, CSS variables có khả năng làm giảm sử lặp lại đó bằng cách cho phép lưu trữ giá trị biến ở 1 nơi và sau đó được tham chiếu ở một nơi khác.

## Cách sử dụng CSS Variables

# 1. Khai báo CSS Variables

Để khai báo một biến, trước tiên bạn cần quyết định phạm vi của biến đó sẽ tồn tại. Đối với global scope bạn có thể sử dụng :root, hoặc bạn cũng có thể tạo các biến cục bộ, tên biến phải bắt đầu bằng 2 dấu gạch ngang (--) và được phân biệt chữ hoa và chữ thường,

```
:root {
--main-color: #ffeead;
--main-background: #ff0000;
}
```

# 2. Cách sử dụng CSS Variables

Để truy cập một biến, bạn cần sử dụng hàm var () và truyền tên của biến làm tham số.

```
.title {
  color: var(--main-color);
  background-color:  var(--main-background);
}
```

Kết quả của đoạn mã ở trên giống với SASS hoặc LESS khi được compiled. Tuy nhiên, so với các chương trình tiền xử lý, CSS variables có những lợi ích nhất định:

Được hỗ trợ trực tiếp bởi trình duyệt, không phải biên dịch.
Các biến được chia theo tầng (cascading). Cũng như CSS selectors, thuộc tính tùy biển có thể được quy định lại bởi những luật ở tầng thấp hơn.
Giúp mã nguồn dễ đọc và có ý nghĩa hơn, nâng cao tính tùy biến và khả năng bảo trì.
Hỗ trợ hầu hết các trình duyệt hiện tại
Bạn cũng có thể kết hợp với hàm calc() khi sử dụng CSS variables:

```
:root {
  --default-font-size: 1.1rem;
}

h1 {
  font-size: calc(var(--default-font-size) * 5); /* 5.5rem */
}
```

# 3. Cách truy cập các biến bằng JavaScript

Do CSS variables tồn tại trong DOM, có thể được truy xuất và thay đổi bằng JavaScript. Tính năng này mở ra những cơ hội mới rất hữu ích khi lập trình frontend.

```
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);
--> '#ffeead'
```

Thay đổi giá trị của biến bằng Javascript

```
root.style.setProperty('--main-color', 'red')
```

# 4. Dễ dàng thay đổi giá trị các biến khi responsive

Chúng ta có thể thay đổi giá trị của biến khi sử dụng @media, @document, hay @support...

```
:root {
  --main-font-size: 16px;
}
media all and (max-width: 600px) {
  :root {
    --main-font-size: 12px;
  }
}
```

# 5. Ngoài ra chúng ta có tuỳ chỉnh fallback values của variables

Sử dụng hàm var (), bạn có thể xác định nhiều giá trị fallback khi biến đã cho chưa được xác định, điều này có thể hữu ích khi làm việc với Custom Elements và Shadow DOM.

```
.el-one {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}

.el-two {
  background-color: var(--my-var, var(--my-background, pink)); /* pink if my-var and --my-background are not defined */
}
```
