const express = require('express');
const fs = require('fs');
const xlsx = require('xlsx');

const app = express();
app.use(express.json());

const FILE_NAME = 'users.xlsx';

app.post('/save-login', (req, res) => {
    const { username, timestamp } = req.body;
    let workbook;
    let worksheet;
    
    // ถ้าไฟล์มีอยู่แล้ว โหลดข้อมูลเก่า
    if (fs.existsSync(FILE_NAME)) {
        workbook = xlsx.readFile(FILE_NAME);
        worksheet = workbook.Sheets["Logins"] || xlsx.utils.json_to_sheet([]);
    } else {
        workbook = xlsx.utils.book_new();
        worksheet = xlsx.utils.json_to_sheet([]);
    }

    // เพิ่มข้อมูลใหม่
    const data = xlsx.utils.sheet_to_json(worksheet);
    data.push({ Username: username, Timestamp: timestamp });

    // อัปเดตไฟล์
    const newWorksheet = xlsx.utils.json_to_sheet(data);
    workbook.Sheets["Logins"] = newWorksheet;
    xlsx.writeFile(workbook, FILE_NAME);

    res.json({ message: "Login data saved successfully!" });
});

app.listen(3000, () => console.log('Server running on port 3000'));
