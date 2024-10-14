const express = require('express');
const path = require('path');
const app = express();

// ชี้ไปที่โฟลเดอร์ 'work' ใน Desktop ของคุณ
app.use(express.static(path.join('D:/newfordor_web')));

// เสิร์ฟไฟล์ HTML
app.get('/', function(req, res){
    res.sendFile(path.join('D:/newfordor_web/index.html'));
});


app.get('/Experience', function(req, res){
    res.sendFile(path.join('D:/newfordor_web/index.html/experience.html'));
});

app.get('/Project', function(req, res){
    res.sendFile(path.join('D:/newfordor_web/index.html/project.html'));
});

app.get('/Contact', function(req, res){
    res.sendFile(path.join('D:/newfordor_web/index.html/contact.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(3000, function(){
    console.log('Server listening on http://localhost:3000');
});