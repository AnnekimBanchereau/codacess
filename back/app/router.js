const express = require('express');
const router = express.Router();

const clientController = require('./controllers/clientController');
const authController = require('./controllers/authController');
const exerciseController = require('./controllers/exerciseController');
const themeController = require('./controllers/themeController');
const docController = require('./controllers/docController');
const swaggerController = require('./controllers/swaggerController');
const pictureController = require('./controllers/pictureController');
const multerConfig = require('./middleware/multer-config');

const jwt = require('express-jwt');
const jwtSecret = process.env.JWTSECRET;
const algorithmsJWT = process.env.JWTALGO;
// middleware checking JWT. JWT is stored into httpOnly cookie.
// If token is valid, will go to next middleware, if not, will throw an error.
// credentialsRequired only if i want let pass everyone
// if only client connect delete the line credentialsRequired
const authorizationMiddlewareLetPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    credentialsRequired: false,
    getToken: (req) => req.cookies.token,
});

const authorizationMiddlewareNotPass = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
    getToken: (req) => req.cookies.token,
});

const authorizationMiddlewareNewPassword = jwt({
    secret: jwtSecret,
    algorithms: [algorithmsJWT],
});

// router.use((req, res, next)=>{
//     console.log('req.url', req.url)
//     next()
// })

// route used by the React App upon loading to retrieve a csrf token.
// this token will be sent into a cookie as well as a header set by the React App
// the csrf middleware in the entry file of the server is in charge of checking
// that both the tokens (sent in cookie + sent in header) are a match.
// This is to ensure the React App is the source of the request.
// router.route('/csrf-token')
//     .get(authController.getCSRFToken);


router.route('/signout')
    .get(authController.signout);

router.route('/clients')
    .get(authorizationMiddlewareNotPass,clientController.getAllClients);

router.route('/clients/:id')
    .patch(authorizationMiddlewareNotPass,clientController.changeRoleClient)
    .delete(authorizationMiddlewareNotPass,clientController.deleteOneClient);

router.route('/profile')
    .get(authorizationMiddlewareNotPass, clientController.getOneClient)
    .patch(authorizationMiddlewareNotPass, clientController.updateClient);

router.route('/signin')
    .post(authController.submitLoginForm);

router.route('/upload')
    .post(authorizationMiddlewareNotPass,multerConfig.imageToClient);

router.route('/signup')
    .post(authController.submitSignupForm);

router.route('/contact')
    .post(authController.submitContact);

router.route('/exercises')
    .get(exerciseController.getAllExercises);

router.route('/exercises/dragndrop/:id')
    .get(authorizationMiddlewareLetPass,exerciseController.getOneExercise)
    .post(authorizationMiddlewareNotPass,exerciseController.submitExercise)
    .patch(authorizationMiddlewareNotPass,exerciseController.changeExercise)
    .delete(authorizationMiddlewareNotPass,exerciseController.deleteOneExercise);

router.route('/themes_exercises')
    .get(themeController.getAllThemesForExercises);

router.route('/themes')
    .get(themeController.getAllThemes);

router.route('/docs')
    .get(docController.getAllDocs);

router.route('/docs/:id')
    .get(authorizationMiddlewareLetPass,docController.getOneDoc)
    .patch(authorizationMiddlewareNotPass,docController.changeOneDoc)
    .delete(authorizationMiddlewareNotPass,docController.deleteOneDoc);

router.route('/docs/:id/client')
    .post(authorizationMiddlewareNotPass,docController.addDocToClient)
    .delete(authorizationMiddlewareNotPass,docController.deleteDocToClient);
    
router.route('/published_docs')
    .get(authorizationMiddlewareLetPass,docController.getAllDocsPublished);

router.route('/docs/new')
    .post(authorizationMiddlewareNotPass,docController.newDoc);


// create exercise
router.route('/exercises/new_exercise')
    .post(authorizationMiddlewareNotPass,exerciseController.newExercise);
// create question
router.route('/exercises/new_question/:id')
    .post(authorizationMiddlewareNotPass,exerciseController.newQuestion)
    .patch(authorizationMiddlewareNotPass,exerciseController.changeQuestion)
    .delete(authorizationMiddlewareNotPass,exerciseController.deleteQuestion);
// create answer
router.route('/exercises/new_answer/:id')
    .post(authorizationMiddlewareNotPass,exerciseController.newAnswer)
    .patch(authorizationMiddlewareNotPass,exerciseController.changeAnswer)
    .delete(authorizationMiddlewareNotPass,exerciseController.deleteAnswer);
// create assosiation exercise/theme
router.route('/exercises/associate_exercise_theme')
    .post(authorizationMiddlewareNotPass,exerciseController.associate_exercise_theme)
    .delete(authorizationMiddlewareNotPass,exerciseController.delete_exercise_theme);

// forget password client
router.route('/forget')
    .post(authController.forgetPassword)
    .patch(authorizationMiddlewareNewPassword,authController.newPassword);


// route used to see all the API in swagger
router.route('/getAllAPI')
    .get(swaggerController.getAllAPI);

module.exports = router;