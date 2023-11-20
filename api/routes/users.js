const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
  const { username, password } = req.body;
  if (username === "dev54321" && password === "dev54321") {
    res.json({
      message: "Вход в систему выполнен успешно",
      access:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNDUxMzA1LCJpYXQiOjE3MDA0NTEyNzUsImp0aSI6IjQ2ZTdlNmVkYTMwMTRhMTM5NzVmZjYyZjA2ZDA4YjRjIiwidXNlcl9pZCI6Mn0.4yNHX-Ptc-c0grV5_hZwel-vplSZncvqVWy4NaRNNAs",
      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwMDUzNzY3NSwiaWF0IjoxNzAwNDUxMjc1LCJqdGkiOiIyM2QyNTYyMDRlYTE0OGUxYmZkYzUxZTM5NzMzYzU0NiIsInVzZXJfaWQiOjJ9.O0s7kSekfp3O8OkddOwhKz4rhQxaW2jcRmQIMrxo0Gw",
      role: "Завсклад",
    });
  }
});

module.exports = router;
