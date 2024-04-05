---
layout: "@/layouts/BlogPostLayout.astro"
title: 6 cách hide elements trong CSS
date: 2016-08-29
author: Nguyen Dac Thanh
image: { src: "/images/post-3.jpg", alt: "A picture of a coder" }
description: Bạn có bao giờ tự hỏi tại sao chúng ta có rất nhiều kỹ thuật giấu một phần tử khi tất cả chúng dường như cùng làm một điều tương tự ?
draft: false
category: CSS
---

Có nhiều cách để ẩn một phần tử trong CSS. Bạn có thể ẩn nó bằng cách đặt opacity xuống 0, visibility sang hidden, display sang none hoặc bằng cách đặt các giá trị cực trị cho vị trí tuyệt đối.

Bạn có bao giờ tự hỏi tại sao chúng ta có rất nhiều kỹ thuật giấu một phần tử khi tất cả chúng dường như cùng làm một điều tương tự ?

Tất cả các phương pháp này thực ra có khác nhau một chút và sự khác biệt này chỉ ra mỗi phương pháp nên được sử dụng trong một trường hợp cụ thể. Hướng dẫn này sẽ đề cập đến những điểm khác biệt nhỏ mà bạn cần lưu ý khi ẩn phần tử bằng cách sử dụng bất kỳ phương pháp nào ở trên.

Hướng dẫn này sẽ đề cập đến những điểm khác biệt nhỏ mà bạn cần lưu ý khi ẩn phần tử bằng cách sử dụng bất kỳ phương pháp nào ở trên.

## Opacity

```
.hide {
  opacity: 0;
}
```

http://codepen.io/SitePoint/pen/bedZrR

## Visibility

```
.hide {
   visibility: hidden;
}
```

http://codepen.io/SitePoint/pen/pbJYpV

## Display

```
.hide {
   display: none;
}
```

http://codepen.io/SitePoint/pen/zBGbjb

## Position

```
.hide {
   position: absolute;
   top: -9999px;
   left: -9999px;
}
```

http://codepen.io/SitePoint/pen/QEboZm

## Clip-path

```
.hide {
  clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
}
```

http://codepen.io/SitePoint/pen/YWXgdW

## Height & Font size

```
.hide{
  height:0;
  font-size:0;
  border: 0;
}
```

http://jsbin.com/cuhuxizahe/edit?html,css,output
