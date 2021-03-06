const express = require("express");
const { Router } = require("express");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const veryfySignUp = require("../middlewares/verifySignUp");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.post(
  "/signup",
  [veryfySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
);

router.post("/signin", controller.signin);

router.post("/refreshtoken", controller.refreshToken);

module.exports = router;
