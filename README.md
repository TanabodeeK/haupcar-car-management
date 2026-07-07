# Haupcar Car Management System

โปรเจกต์นี้เป็นระบบจัดการข้อมูลรถยนต์ของบริษัท พัฒนาขึ้นสำหรับแบบทดสอบตำแหน่ง Software Developer

ระบบนี้สามารถเพิ่ม ดู แก้ไข และลบข้อมูลรถยนต์ได้ โดยแบ่งการทำงานออกเป็น 2 ส่วน คือ Frontend และ Backend

## Features

* แสดงข้อมูลรถยนต์ทั้งหมด
* เพิ่มข้อมูลรถยนต์ใหม่
* แก้ไขข้อมูลรถยนต์
* ลบข้อมูลรถยนต์
* ตรวจสอบข้อมูลก่อนบันทึกด้วย Zod
* แสดง popup แจ้งเตือนและยืนยันการลบด้วย SweetAlert2
* ออกแบบหน้าเว็บด้วย Bootstrap
* เชื่อมต่อ Frontend กับ Backend ผ่าน RESTful API

## Tech Stack

### Frontend

* React.js
* Vite
* Bootstrap
* Axios
* Zod
* SweetAlert2

### Backend

* Node.js
* Express.js
* Prisma ORM
* SQLite
* CORS
* Dotenv

## Project Structure

```txt
haupcar-car-management/
  backend/
    prisma/
      schema.prisma
    src/
      config/
        prisma.js
      controllers/
        car.controller.js
      routes/
        car.route.js
      services/
        car.service.js
      utils/
        createError.js
      app.js
      server.js
    package.json

  frontend/
    src/
      api/
        carApi.js
      components/
        CarForm.jsx
        CarTable.jsx
        Navbar.jsx
      pages/
        CarPage.jsx
      validations/
        carSchema.js
      App.jsx
      main.jsx
    package.json

  README.md
  .gitignore
```

## API Endpoints

| Method | Endpoint        | รายละเอียด             |
| ------ | --------------- | ---------------------- |
| GET    | `/api/cars`     | ดึงข้อมูลรถยนต์ทั้งหมด |
| GET    | `/api/cars/:id` | ดึงข้อมูลรถยนต์ตาม id  |
| POST   | `/api/cars`     | เพิ่มข้อมูลรถยนต์ใหม่  |
| PATCH  | `/api/cars/:id` | แก้ไขข้อมูลรถยนต์      |
| DELETE | `/api/cars/:id` | ลบข้อมูลรถยนต์         |

## ข้อมูลรถยนต์ที่ใช้ในระบบ

ข้อมูลรถยนต์แต่ละคันจะมีข้อมูลหลักดังนี้

| Field          | รายละเอียด        |
| -------------- | ----------------- |
| `licensePlate` | เลขทะเบียนรถ      |
| `brand`        | ยี่ห้อรถ          |
| `model`        | รุ่นรถ            |
| `color`        | สีรถ              |
| `year`         | ปีรถ              |
| `note`         | หมายเหตุเพิ่มเติม |

## การติดตั้งและรันโปรเจกต์

โปรเจกต์นี้ใช้ `pnpm` ในการจัดการ package

หลังจาก clone project แล้ว ให้ติดตั้งและรันแยกเป็น 2 ส่วน คือ backend และ frontend

## Backend Setup

เข้าไปที่โฟลเดอร์ backend

```bash
cd backend
```

ติดตั้ง dependencies

```bash
pnpm install
```

สร้างไฟล์ `.env` ในโฟลเดอร์ `backend`

```env
PORT=8000
DATABASE_URL="file:./dev.db"
```

รัน Prisma migration เพื่อสร้าง database

```bash
pnpm exec prisma migrate dev
```

รัน backend server

```bash
pnpm dev
```

Backend จะรันที่

```txt
http://localhost:8000
```

## Frontend Setup

เปิดอีก terminal แล้วเข้าไปที่โฟลเดอร์ frontend

```bash
cd frontend
```

ติดตั้ง dependencies

```bash
pnpm install
```

รัน frontend

```bash
pnpm dev
```

Frontend จะรันที่

```txt
http://localhost:5173
```

## วิธีรันโปรเจกต์

ต้องเปิด 2 terminal

### Terminal 1: Backend

```bash
cd backend
pnpm dev
```

### Terminal 2: Frontend

```bash
cd frontend
pnpm dev
```

หลังจากนั้นเปิด browser ไปที่

```txt
http://localhost:5173
```

## ตัวอย่างข้อมูลสำหรับเพิ่มรถยนต์

```json
{
  "licensePlate": "กข-1234",
  "brand": "Toyota",
  "model": "Yaris",
  "color": "White",
  "year": 2022,
  "note": "Company car"
}
```

## หมายเหตุเกี่ยวกับการพัฒนา

* Frontend แยก component ออกเป็นส่วน ๆ เพื่อให้อ่านและดูแลโค้ดง่ายขึ้น
* `CarPage.jsx` ใช้สำหรับจัดการ state หลักของหน้า เช่น ข้อมูลรถยนต์ ข้อมูลในฟอร์ม และการเรียก API
* `CarForm.jsx` ใช้สำหรับฟอร์มเพิ่มและแก้ไขข้อมูลรถยนต์
* `CarTable.jsx` ใช้สำหรับแสดงข้อมูลรถยนต์ในรูปแบบตาราง
* `carApi.js` ใช้สำหรับแยกส่วนการเรียก API ออกจากหน้า component
* Backend แยกโครงสร้างเป็น routes, controllers และ services
* ใช้ Prisma ORM สำหรับจัดการ database
* ใช้ Zod สำหรับ validate ข้อมูลก่อนส่งไป backend
* ใช้ SweetAlert2 สำหรับแจ้งเตือนและยืนยันการลบข้อมูล

## Author

Tanabodee Khaimoung
