require("colors");

const server = (app) => {
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, (err) => {
    console.log(`App running on port ${PORT}`);
  });
};
module.exports = server
