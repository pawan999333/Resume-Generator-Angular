// filepath: c:\Users\Lenovo\Desktop\resume-cv-project\project\netlify\functions\ssr.js
const { app } = require('../../dist/project/server/main');

exports.handler = async (event, context) => {
  const server = app();
  const response = await new Promise((resolve) => {
    const res = {
      setHeader: () => {},
      end: (body) => resolve({ statusCode: 200, body }),
    };
    server(event, res);
  });
  return response;
};
