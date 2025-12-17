# Lab04 - Bootstrap

## การใช้งาน Bootstrap ในโปรเจค

โปรเจคนี้ใช้ **Bootstrap 5.3** เป็น CSS Framework หลักในการจัดการ Layout และ Components

### การเรียกใช้งาน Bootstrap

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Bootstrap Classes ที่ใช้ในโปรเจค

| Class | หน้าที่ |
|-------|--------|
| `container` | กำหนดขอบเขตของเนื้อหา |
| `row`, `col-*` | จัดการ Grid System |
| `navbar`, `navbar-dark`, `bg-dark` | สร้าง Navigation Bar |
| `card`, `card-body`, `card-header` | สร้างกล่องแสดงเนื้อหา |
| `btn`, `btn-primary` | สร้างปุ่ม |
| `form-control`, `form-select`, `form-check` | จัด Style ให้ Form |
| `shadow`, `shadow-sm` | เพิ่มเงา |
| `py-*`, `mb-*`, `mt-*` | Spacing utilities |

---

## ไฟล์ที่สร้างเพิ่มเติม: Create Blog

### หน้า Index - ปุ่มสร้างบทความ

ในหน้า [index.html](index.html) มีการเพิ่มปุ่ม "สร้างบทความ" เพื่อนำทางไปยังหน้าสร้างบทความ

```html
<a href="create-blog.html" class="green-button">สร้างบทความ</a>
```

**ตัวอย่างหน้า Index:**

![หน้า Index](images/index.png)

---

### หน้า Create Blog

ไฟล์ [create-blog.html](create-blog.html) เป็นฟอร์มสำหรับสร้างบทความใหม่

#### ส่วนประกอบของฟอร์ม

1. **ชื่อบทความ** - `<input type="text">`
2. **ชื่อผู้เขียน** - `<input type="text">`
3. **หมวดหมู่** - `<select>` มีตัวเลือก: HTML, CSS, JavaScript, Bootstrap, Web Design
4. **เนื้อหา** - `<textarea>` กำหนด minlength 100 ตัวอักษร
5. **รูปภาพ (URL)** - `<input type="url">`
6. **Checkbox ยินยอม** - `<input type="checkbox">`
7. **ปุ่มสร้างบทความ** - `<button type="submit">`

#### Bootstrap Classes ที่ใช้ในฟอร์ม

- `form-control` - จัด Style ให้ input และ textarea
- `form-select` - จัด Style ให้ dropdown
- `form-check`, `form-check-input`, `form-check-label` - จัด Style ให้ checkbox
- `invalid-feedback` - แสดงข้อความ error เมื่อ validation ไม่ผ่าน

**ตัวอย่างหน้า Create Blog:**

![หน้า Create Blog](images/create-box.png)

---

## Source Code

- [index.html](index.html) - หน้าแรก
- [create-blog.html](create-blog.html) - หน้าสร้างบทความ
- [css/style.css](css/style.css) - Custom CSS
- [js/script.js](js/script.js) - JavaScript
