## การเเข่งขันหุ่นยนต์ องค์กรปกครองส่วนท้องถิ่น พ.ศ.2568
![enter image description here](https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/488516694_1112533177553986_1564600622138000194_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LjTBF7ierHEQ7kNvwFKPovr&_nc_oc=AdmohvfwoobC1MTxL3Q9SgDCZzZsS7m74vHFDUTGg2vQkqG9f9jQnKkP7-zR_kxPgjVwCW5MGuO7SN7OPoi9o9NM&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=pyVPtJbKwOGz2gwrcjb2eQ&oh=00_AfLt1hg9WJb5Z1yP5-iJeWXQz0ynRmcMwwDYpNOFiE82pA&oe=682551C8)

เป็นการเเข่งขันหุ่นยนต์ Logistics ภารกิจคือการนำกระป๋องที่เก็บได้ไปวางเข้าหลุมวงกลมที่สร้างไว้ใน box ที่มีความสูงต่างกันเเละต้องเเยกสีกระป๋อง เพื่อวางให้ตรงตำเเหน่งของสีกระป๋องนั้น
โดยผมได้ใช้ Arduino ที่เป็น ภาษา C  เป็น software ในการเขียนโปรเเกรมเพื่อควบคุมการทำงานของ Robot


# ส่วนๆต่างๆใน Robot

 - Microcontroller  is  POP-32i
 - MPU6050
 - Ultrasonic
 - Sensor 
 - Arm Robot
 - TCS34752
 - Battery Lithium-ion  11000  mAh
 - Motor

## GitHub สำหรับติดตั้ง POP-32i

>https://github.com/INEXdev/ArduinoSTM32/raw/main/package_inex_stm32_index.json



## Library ต่างๆสำหรับ Robot

 - Adafruit_TCS34725.h
 - POP-32i
 
 ## Code ที่สำคัญ
 
 - การจูน  Robot กับเส้น
 - การ Reset  MPU6050 ก่อนทำการปล่อย Robot
 - Function สำหรับการเลี้ยว MPU60550
 - Technical  การวางกระป๋อง
