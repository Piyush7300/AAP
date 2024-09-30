const express = require("express");
const router = express.Router();
const createUser = require("../user/createUser");
const { userSchema } = require("../validation/createUser");

router.post("/", async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      res
        .status(400)
        .json({
          message: "Invalid request data",
          error: error.details[0].message,
        });
      return;
    }

    let response = await createUser(req.body);
    res.status(201).json({
      statusCode: 201,
      message: "User created successfully",
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error,
    });
  }
});


// router.get('/:id', );
// router.put('/:id', );
// router.delete('/:id', );

module.exports = router;
