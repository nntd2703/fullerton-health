"user strict";

const User = require("../models/user.model");

module.exports = {
  check_user: (req, res) => {
    var user_id = req.body.user_id;
    var email = req.body.email;
    var name = req.body.name;
    var phone = req.body.phone;
    var sql = "SELECT * FROM `mf_user` Where `user_id` = '" + user_id + "'";
    var user_infor = new User(user_id, email, name, phone);
    db.query(sql, (err, result) => {
      if (err) return res.send(err);
      console.log("Length " + result.length);
      if (result.length === 0) {
        insert_new_user(user_infor, function (User) {
          res.json(User);
          console.log("behind callback " + JSON.stringify(User, null, 2));
        });
      }
      res.json(user_infor);
    });
  },
};
