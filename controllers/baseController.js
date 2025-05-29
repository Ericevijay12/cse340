const baseController = {};

baseController.buildHome = async function(req, res) {
  const nav = await req.app.locals.utilities.getNav();
  res.render("index", {
    title: "Home | CSE Motors",
    nav,
  });
};

module.exports = baseController;
