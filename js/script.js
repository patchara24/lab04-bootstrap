// Blog Data (Mockup)
const blogData = {
    1: {
        title: "HTML5: มาตรฐานเว็บอยู่ยุคไหนแล้ว",
        author: "Admin",
        date: "15 ธันวาคม 2025",
        content: `
 <h1>HTML5: มาตรฐานเว็บอยู่ยุคไหนแล้ว</h1>
 <div class="blog-meta">
 <strong>เขียนโดย:</strong> Admin | <strong>วันที่:</strong> 15 ธันวาคม 2025
 </div>
 <p>
 HTML5 เป็นมาตรฐานล่าสุดของภาษา HTML ที่ได้รับการยอมรับจากองค์กร W3C
 มาตรฐานนี้น าเสนอฟีเจอร์ใหม่หลายอย่างที่ช่วยให้การพัฒนาเว็บไซต์มีประสิทธิภาพมากขึ้น
 </p>
 <h3>ฟีเจอร์หลักของ HTML5</h3>
 <p>
 1. <strong>Semantic Elements:</strong> เช่น &lt;header&gt;, &lt;nav&gt;, &l
t;section&gt;, &lt;article&gt;, &lt;footer&gt;<br>
 2. <strong>Form Elements:</strong> input type ใหม่ๆ เช่น date, email, number<
br>
 3. <strong>Media Elements:</strong> &lt;video&gt; และ &lt;audio&gt; tags<b
r>
 4. <strong>Canvas and SVG:</strong> ส าหรับการวาดภาพ<br>
 5. <strong>Local Storage:</strong> เก็บข้อมูลในฝั ่ง client
 </p>
 <h3>ข้อดีของการใช้ HTML5</h3>
 <p>
 - ท าให้เว็บไซต์เข้ากันได้กับอุปกรณ์ต่างๆได้ดีขึ้น<br>
 - ปรับปรุง SEO เพราะใช้ semantic markup<br>
 - ลดการพึ่งพา plugins เช่น Flash<br>
 - ให้สามารถสร้างแอปพลิเคชัน web-based ได้อย่างมีประสิทธิภาพ
 </p>
 <h3>สรุป</h3>
 <p>
 HTML5 เป็นมาตรฐานที่ส าคัญและเป็นพื้นฐานของการพัฒนาเว็บสมัยใหม่
 นักพัฒนาเว็บควรมีความเข้าใจที่ดีเกี่ยวกับ HTML5 เพื่อสร้างเว็บไซต์ที่มีคุณภาพสูง
 </p>
 `,
    },
    2: {
        title: "CSS Grid vs Flexbox: เลือกอันไหนดี",
        author: "Admin",
        date: "14 ธันวาคม 2025",
        content: `
 <h1>CSS Grid vs Flexbox: เลือกอันไหนดี</h1>
 <div class="blog-meta">
 <strong>เขียนโดย:</strong> Admin | <strong>วันที่:</strong> 14 ธันวาคม 2025
 </div>
 <p>
 CSS Grid และ Flexbox เป็นสองเครื่องมือที่ส าคัญในการสร้างเลย์เอาต์ที่ทันสมัย
 ทั้งสองมีข้อดีและข้อเสียต่างกัน ลองมาเปรียบเทียบกันดู
 </p>
 <h3>Flexbox</h3>
 <p>
 Flexbox เหมาะส าหรับการจัดเรียงรายการในแนวเดียว (row หรือ column)<br>
 <strong>ข้อดี:</strong><br>
 - ใช้งานง่าย ส าหรับ layout ที่ไม่ซับซ้อน<br>
 - ดีส าหรับการจัดเรียงรายการที่มีขนาดแตกต่างกัน<br>
 - ตอบสนองได้ดี (responsive)<br>
 <strong>ข้อเสีย:</strong><br>
 - ไม่สามารถจัดการ layout 2D ที่ซับซ้อนได้
 </p>
 <h3>CSS Grid</h3>
 <p>
 CSS Grid เหมาะส าหรับการสร้าง layout ที่ซับซ้อนในสองมิติ<br>
 <strong>ข้อดี:</strong><br>
 - สามารถจัดการ layout 2D ได้อย่างมีประสิทธิภาพ<br>
 - ดีส าหรับ page layout ที่ซับซ้อน<br>
 - ลดความสับสน (confusion) ในโครงสร้าง HTML<br>
 <strong>ข้อเสีย:</strong><br>
 - การเรียนรู้ซับซ้อนกว่า Flexbox<br>
 - ไม่จ าเป็นต้องใช้ส าหรับ layout ที่ง่ายๆ
 </p>
 <h3>สรุป</h3>
 <p>
 เลือก Flexbox ส าหรับ layout ที่ง่ายๆ และต้องการความยืดหยุ่น<br>
 เลือก CSS Grid ส าหรับ page layout ที่ซับซ้อนหรือต้องการควบคุมได้ละเอียด<br>
 หรือใช้ทั้งคู่ร่วมกันส าหรับ layout ที่สมบูรณ์แบบ!
 </p>
 `,
    },
    3: {
        title: "JavaScript ES6+: ฟีเจอร์ใหม่ที่ต้องรู้",
        author: "Admin",
        date: "13 ธันวาคม 2025",
        content: `
 <h1>JavaScript ES6+: ฟีเจอร์ใหม่ที่ต้องรู้</h1>
 <div class="blog-meta">
 <strong>เขียนโดย:</strong> Admin | <strong>วันที่:</strong> 13 ธันวาคม 2025
 </div>
 <p>
 ES6 (ECMAScript 2015) น าเสนอการเปลี่ยนแปลงครั้งใหญ่ให้กับ JavaScript
 ปัจจุบันนี้ JavaScript ยังคงพัฒนาต่อเรื่อยๆ มาท าความเข้าใจฟีเจอร์ใหม่ๆที่เป็นประโยชน์กัน
 </p>
 <h3>Arrow Functions</h3>
 <p>
 Arrow functions เป็นวิธีเขียนฟังก์ชันที่สั้นและสะดวกกว่า<br>
 <code>const add = (a, b) => a + b;</code>
 </p>
 <h3>Destructuring</h3>
 <p>
 ช่วยให้เราสามารถดึงค่าออกจาก object หรือ array ได้อย่างง่าย<br>
 <code>const { name, age } = person;</code>
 </p>
 <h3>Template Literals</h3>
 <p>
 ใช้ backticks (\`) เพื่อสร้าง string ที่มี placeholder<br>
 <code>const message = \`Hello, \${name}!\`;</code>
 </p>
 <h3>Promise และ Async/Await</h3>
 <p>
 ช่วยให้การจัดการ asynchronous code ท าได้ง่ายขึ้น
 </p>
 <h3>Modules</h3>
 <p>
 ES6 modules ช่วยให้เราแยก code ออกเป็นส่วนต่างๆได้อย่างเป็นระบบ
 </p>
 `,
    },
    4: {
        title: "Bootstrap 5: เริ่มต้นใช้ CSS Framework",
        author: "Admin",
        date: "12 ธันวาคม 2025",
        content: `
 <h1>Bootstrap 5: เริ่มต้นใช้ CSS Framework</h1>
 <div class="blog-meta">
 <strong>เขียนโดย:</strong> Admin | <strong>วันที่:</strong> 12 ธันวาคม 2025
 </div>
 <p>
 Bootstrap 5 เป็น CSS framework ที่ทรงพลังและง่ายต่อการใช้งาน
 ช่วยให้นักพัฒนา frontend สามารถสร้างเว็บไซต์ที่ตอบสนองได้เร็ว
 </p>
 <h3>ข้อดีของ Bootstrap 5</h3>
 <p>
 1. <strong>Responsive Design:</strong> ท าให้เว็บไซต์ดูดีบนอุปกรณ์ทุกขนาด<br>
 2. <strong>Pre-built Components:</strong> ปุ่ม, บาร์น าทาง, การ์ด เป็นต้น<br>
 3. <strong>Utility Classes:</strong> ช่วยให้เราจัดต าแหน่งและจัดสไตล์ได้ง่าย<br>
 4. <strong>Flexbox Grid:</strong> ระบบกริดที่ยืดหยุ่น<br>
 5. <strong>ชุมชน Large Community:</strong> มีทรัพยากรมากมายให้เรียนรู้
 </p>
 <h3>เริ่มต้นใช้ Bootstrap</h3>
 <p>
 1. เพิ่ม Bootstrap CSS link ในหน้า HTML<br>
 2. ใช้ Bootstrap classes ในหน้า HTML ของคุณ<br>
 3. เพิ่ม Bootstrap JS bundle ก่อน closing &lt;/body&gt; tag
 </p>
 <h3>สรุป</h3>
 <p>
 Bootstrap 5 เป็นเครื่องมือที่ยอดเยี่ยมส าหรับนักพัฒนา frontend
 ลองใช้และค้นพบความสามารถของมันเพื่อเพิ่มประสิทธิภาพในการพัฒนา
 </p>
 `,
    },
    5: {
        title: "Web Responsive Design: ส าเร็จในยุคมือถือ",
        author: "Admin",
        date: "11 ธันวาคม 2025",
        content: `
 <h1>Web Responsive Design: ส าเร็จในยุคมือถือ</h1>
 <div class="blog-meta">
 <strong>เขียนโดย:</strong> Admin | <strong>วันที่:</strong> 11 ธันวาคม 2025
 </div>
 <p>
 ในยุคปัจจุบัน ผู้ใช้ส่วนใหญ่เข้าเว็บไซต์จากอุปกรณ์มือถือ
 ดังนั้น Responsive Design จึงเป็นสิ่งที่ต้องมีในทุกเว็บไซต์สมัยใหม่
 </p>
 <h3>หลักการของ Responsive Design</h3>
 <p>
 1. <strong>Mobile First:</strong> ออกแบบส าหรับมือถือก่อน แล้วขยายออกไป<br>
 2. <strong>Flexible Layout:</strong> ใช้ percentage หรือ em แทน px<br>
 3. <strong>Media Queries:</strong> เปลี่ยนสไตล์ตามขนาดหน้าจอ<br>
 4. <strong>Flexible Images:</strong> ภาพที่ปรับขนาดได้
 </p>
 <h3>Media Query Breakpoints</h3>
 <p>
 - Extra small: &lt; 576px<br>
 - Small: ≥ 576px<br>
 - Medium: ≥ 768px<br>
 - Large: ≥ 992px<br>
 - Extra large: ≥ 1200px
 </p>
 <h3>สรุป</h3>
 <p>
 Responsive Design ไม่ใช่ตัวเลือก แต่เป็นความจ าเป็นในการพัฒนาเว็บสมัยใหม่
 อย่าลืมทดสอบบนอุปกรณ์ที่แตกต่างกันเพื่อให้มั ่นใจว่าเว็บไซต์ของคุณใช้งานได้ดีส าหรับทุกคน
 </p>
 `,
    },
};
// Form Validation and Navigation
document.addEventListener("DOMContentLoaded", function () {
    // Register Form Handling
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            // Validate form
            if (!registerForm.checkValidity() === false) {
                e.stopPropagation();
            }
            if (password !== confirmPassword) {
                alert("รหัสผ่านไม่ตรงกัน");
                return;
            }
            registerForm.classList.add("was-validated");
            if (registerForm.checkValidity() === false) {
                return;
            }
            // Show success message
            alert("สมัครสมาชิกส าเร็จ! ระบบจะน าคุณไปหน้า Login");
            // Redirect to login page
            window.location.href = "login.html";
        });
    }
    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            loginForm.classList.add("was-validated");
            if (loginForm.checkValidity() === false) {
                e.stopPropagation();
                return;
            }
            // Simple validation (mockup - no database)
            if (username && password) {
                alert("เข้าสู่ระบบส าเร็จ!");
                // Redirect to home page
                window.location.href = "index.html";
            } else {
                alert("กรุณากรอกข้อมูลให้ครบ");
            }
        });
    }
    // Load Blog Content
    const blogContent = document.getElementById("blogContent");
    if (blogContent) {
        const params = new URLSearchParams(window.location.search);
        const postId = params.get("id") || 1;
        if (blogData[postId]) {
            blogContent.innerHTML = blogData[postId].content;
        } else {
            blogContent.innerHTML = "<p>ไม่พบบทความ</p>";
        }
    }
});
