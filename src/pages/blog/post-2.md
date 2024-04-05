---
layout: "@/layouts/BlogPostLayout.astro"
title: Astrojs
date: 2022-11-25
author: BeautyONCode
image: { src: "/images/post-2.jpg", alt: "A picture of a coder" }
description: Astro là một frontend framework được thiết kế với tốc độ load trang nhanh với kiến trúc Astro Island.
draft: false
category: General
---

## Giới thiệu Astro

Astro Island đại diện cho sự thay đổi kiến trúc xây dựng website ở phần giao diện. Bằng cách trích xuất trang web ra thành các phần nhỏ hơn, biệt lập hơn. JavaScript không sử dụng sẽ thay thế bằng HTML nhẹ hơn, đảm bảo việc load trang và tương tác nhanh hơn.

Ba điểm nổi trội:

Zero JavaScript Runtime
The Power of Islands
Lazy-loading Islands
Astro được thiết kế dành cho các loại nội dung đa dạng như CMS, markdown, MDX, API. ...

Astro cho phép kết hợp với các loại thư viện JS phổ biến để xây dựng component như React, VueJS, Svelte, TailwindCSS, ...

Astro hỗ trợ việc deploy linh hoạt, cả static output (SSG) và server output (SSR)

Bạn ghé vào trang chủ Astro để tìm hiểu thêm nhé.

## Ra mắt Astro 2.0

Astro là một front-end framework được xây dựng phục vụ các trang web chú trọng về mặt nội dung. Với Astro giúp tăng 33% tốc độ tải trang và JavaScript giảm 90% đồng thời sử dụng cùng với các thư viện phổ biến như React, Vue, Svelte.

Astro 2.0 là framework đầu tiên cung cấp type-safe hoàn chỉnh cho markdown, MDX. Bản Astro 2.0 này thực sự thay đổi cuộc chơi cho bất cứ ai xài markdown trên web.

Các điểm nổi bật trong bản Astro 2.0 bao gồm:

Automate typesafety cho markdown và MDX

Astro 2.0 mô phỏng lại trải nghiệm của nhà phát triển nội dung với Content Collection API. Bằng cách sắp xếp các file markdown và MDX vào các bộ sưu tập khác nhau như blogs, newsletter, products và

Astro sẽ lo các phần còn lại:

Schema validation
SEO best practices
Informative error messages
Automatic generated types
Inline type errors, autocomplete, ...
Hybrid Rendering cho phép bạn chọn cả static rendering (SSG) và dynamic rendering (SSR) thay vì chỉ chọn một trong hai như trước đây. Việc kết hợp này mở ra các khả năng mới bao gồm:

Cải thiện hiệu suất render của các trang phổ biến
Cải thiện hiệu suất xây dựng các trang web lớn
Thêm API vào trang web tĩnh
Error Overlay là lớp hiển thị lỗi được cải tiến giúp cho lập trình viên dễ dàng debug chương trình kèm theo các kiến thức gợi ý và có thể dẫn bạn đến dòng mã đang bị lỗi trên editor

Hot Module Reload (HMR) được nâng cao hiệu suất và độ tin cậy

Phiên bản mới nhất Vite 4.0 được áp dụng

Astro 2.0 đã sẵn sàng trên npm, cài đặt với "npm i astro@latest"
