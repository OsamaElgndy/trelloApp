import { BACE_URL } from "../constants"
export const TemplateSendEmail = (token : string , name : string)=>{
 
 return `
 <!DOCTYPE html>
<html>
<head>
  <title>Confirm Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    .container {
      width: 80%;
      margin: 40px auto;
      background-color: #fff;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #4CAF50;
      color: #fff;
      padding: 10px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      padding: 20px;
    }
    .button {
      background-color: #4CAF50;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .button:hover {
      background-color: #3e8e41;
    }
    .qrcode {
      width: 200px;
      height: 200px;
      margin: 20px auto;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Confirm Your Email</h2>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Please confirm your email address by scanning the QR code below or clicking the button.</p>
      <div class="qrcode">
        <img src="./src/common/constants/sendEmail/qr-code.png" alt="QR Code">
      </div>
      <a href=${`${BACE_URL}/${token}`} target="_blank"> 
      
      
      <button class="button">Confirm Email  </button>
      </a>
    </div>
  </div>
</body>
</html>`
}


export const TemplateErorr = 
  `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Not Found</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </body>
  </html>
  
  <style>body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
    text-align: center;
    padding-top: 100px;
  }
  
  h1 {
    color: #00698f;
  }
  
  p {
    color: #333;
  }
    </style>
  `

  export const TemplateSuccess =  (name : string , email : string ) =>{
   return  `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Welcome User</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Welcome, User!</h1>
    <p>We're glad you're here.</p>
    <div class="user-info">
      <h2>User Information</h2>
      <p>Name:${name} <span id="username"></span></p>
      <p>Email:${email} <span id="useremail"></span></p>
    </div>
  </body>
  </html>
  <style>
  body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
    text-align: center;
    padding-top: 100px;
    }
    
  h1 {
    color: #00698f;
  }
  
  p {
    color: #333;
  }
  
  .user-info {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .user-info h2 {
      margin-top: 0;
      }
      
      #username, #useremail {
        font-weight: bold;
        color: #00698f;
        }
        </style>
    `
  }