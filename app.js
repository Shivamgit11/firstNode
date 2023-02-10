// const http = require("http");

// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       "<body><form action={message} method={POST}><input type={text} name={message}><button type={submit} >send</button></form></body>"
//     );
//     res.write("</html>");
//     res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       console.log(parsedBody);
//       fs.writeFile("message.txt", message, err => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }

//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My first Page</title></head>");
//   res.write("<body>Hello from my NOde.js server!</body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(3000);
const http = require("http");
const fs = require("fs");

const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("data from file" + data);
      res.write("<html>");
      res.write(
        `<body><form action="/message" method="POST"><input type="text name="message"><button type="submit">send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsed Body >>>> ", parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("inside fs.writeFile");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello from node</h1></body>");
    res.write("</html>");
    res.end();
  }
}
);

server.listen(3000);
