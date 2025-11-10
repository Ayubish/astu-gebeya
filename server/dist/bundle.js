/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.app = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\ndotenv_1.default.config();\n// NOTE: IMPORTING ALL ROUTES HERE\nconst error_middleware_1 = __importDefault(__webpack_require__(/*! ./middlewares/error.middleware */ \"./src/middlewares/error.middleware.ts\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst __dirname = path_1.default.resolve();\nexports.app = (0, express_1.default)();\nexports.app.use(express_1.default.json());\nexports.app.use((0, morgan_1.default)(\"common\"));\nexports.app.use((0, cors_1.default)({\n    credentials: true,\n    origin: \"http://localhost:5173\",\n}));\n// Import routes\nconst upload_routes_1 = __importDefault(__webpack_require__(/*! ./routes/upload.routes */ \"./src/routes/upload.routes.ts\"));\n// Define routes\nexports.app.use('/api/v1/upload', upload_routes_1.default);\nexports.app.use('/api/v1/images', express_1.default.static(path_1.default.join(__dirname, '/public/images')));\nexports.app.get(\"/\", function (req, res) {\n    res.send(\"This is the homepage\");\n});\nexports.app.use(error_middleware_1.default);\n\n\n//# sourceURL=webpack://main-back/./src/app.ts?\n}");

/***/ }),

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connectDB = void 0;\nconst client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new client_1.PrismaClient();\nconst connectDB = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield prisma.$connect();\n        console.log(\"✅ Database connected successfully to Neon PostgreSQL\");\n    }\n    catch (error) {\n        console.error(\"❌ Error while trying to connect to the database:\", error instanceof Error ? error.message : error);\n        process.exit(1);\n    }\n});\nexports.connectDB = connectDB;\nexports[\"default\"] = prisma;\n\n\n//# sourceURL=webpack://main-back/./src/config/db.ts?\n}");

/***/ }),

/***/ "./src/config/env.ts":
/*!***************************!*\
  !*** ./src/config/env.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SESSION_SECRET = exports.SENDER_EMAIL = exports.SMTP_PASS = exports.SMTP_USER = exports.JWT_SECRET = exports.DB_URI = exports.PORT = void 0;\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\n(0, dotenv_1.config)({ path: `.env` });\n_a = process.env, exports.PORT = _a.PORT, exports.DB_URI = _a.DB_URI, exports.JWT_SECRET = _a.JWT_SECRET, exports.SMTP_USER = _a.SMTP_USER, exports.SMTP_PASS = _a.SMTP_PASS, exports.SENDER_EMAIL = _a.SENDER_EMAIL, exports.SESSION_SECRET = _a.SESSION_SECRET;\n\n\n//# sourceURL=webpack://main-back/./src/config/env.ts?\n}");

/***/ }),

/***/ "./src/controllers/upload.controller.ts":
/*!**********************************************!*\
  !*** ./src/controllers/upload.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFile = exports.uploadFile = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst multer_1 = __importDefault(__webpack_require__(/*! ../middlewares/multer */ \"./src/middlewares/multer.ts\"));\nconst uploadFile = (req, res) => {\n    console.log(\"Hello world\");\n    (0, multer_1.default)(req, res, (err) => {\n        if (err) {\n            return res.status(400).json({\n                success: false,\n                message: err.message || \"Error uploading file\",\n            });\n        }\n        if (!req.file) {\n            return res.status(400).json({\n                success: false,\n                message: \"No file uploaded\",\n            });\n        }\n        // Construct the file URL\n        const fileUrl = `/images/${req.file.filename}`;\n        res.status(200).json({\n            success: true,\n            message: \"File uploaded successfully\",\n            data: {\n                url: fileUrl,\n                filename: req.file.filename,\n                originalname: req.file.originalname,\n                size: req.file.size,\n            },\n        });\n    });\n};\nexports.uploadFile = uploadFile;\nconst getFile = (req, res) => {\n    const { filename } = req.params;\n    const filePath = path_1.default.join(__dirname, '../../public/images', filename);\n    res.sendFile(filePath, (err) => {\n        if (err) {\n            res.status(404).json({\n                success: false,\n                message: 'File not found',\n            });\n        }\n    });\n};\nexports.getFile = getFile;\n\n\n//# sourceURL=webpack://main-back/./src/controllers/upload.controller.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nconst db_1 = __webpack_require__(/*! ./config/db */ \"./src/config/db.ts\"); // ✅ use the correct file where you defined connectDB\nconst env_1 = __webpack_require__(/*! ./config/env */ \"./src/config/env.ts\"); // ✅ no need for \"../src\", since this file is already in src\n// Start the server\napp_1.app.listen(env_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(`🚀 Server is running at http://localhost:${env_1.PORT}`);\n    yield (0, db_1.connectDB)(); // ✅ connect to Neon PostgreSQL through Prisma\n}));\n\n\n//# sourceURL=webpack://main-back/./src/index.ts?\n}");

/***/ }),

/***/ "./src/middlewares/error.middleware.ts":
/*!*********************************************!*\
  !*** ./src/middlewares/error.middleware.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst errorMiddleware = (err, req, res, next) => {\n    let error = Object.assign({}, err);\n    error.message = err.message || \"Error occurred in the middleware\";\n    console.error(error);\n    if (err.name === \"CastError\") {\n        error = new Error(\"Resource not Found\");\n        error.statusCode = 404;\n    }\n    if (err.code === 11000) {\n        error = new Error(\"Duplicate key error\");\n        error.statusCode = 400;\n    }\n    if (err.name === \"ValidationError\" && err.errors) {\n        error = new Error(Object.values(err.errors)\n            .map((val) => val.message)\n            .join(\", \"));\n        error.statusCode = 400;\n    }\n    res.status(error.statusCode || 500).json({\n        success: false,\n        error: error.message || \"Server Error\",\n    });\n};\nexports[\"default\"] = errorMiddleware;\n\n\n//# sourceURL=webpack://main-back/./src/middlewares/error.middleware.ts?\n}");

/***/ }),

/***/ "./src/middlewares/multer.ts":
/*!***********************************!*\
  !*** ./src/middlewares/multer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst multer_1 = __importDefault(__webpack_require__(/*! multer */ \"multer\"));\nconst path = __webpack_require__(/*! path */ \"path\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst __dirname = path.resolve();\nconst storage = multer_1.default.diskStorage({\n    destination: (req, file, cb) => {\n        const uploadDir = path.join(__dirname, \"public/images\");\n        // Ensure directory exists\n        if (!fs.existsSync(uploadDir)) {\n            fs.mkdirSync(uploadDir, { recursive: true });\n        }\n        cb(null, uploadDir);\n    },\n    filename: (req, file, cb) => {\n        const uniqueSuffix = \"gebeya-\" + Date.now();\n        const fileExtension = path.extname(file.originalname); // Get the file extension\n        cb(null, uniqueSuffix + fileExtension); // Append the extension once\n    },\n});\nconst fileFilter = (req, file, cb) => {\n    const allowedFileTypes = /jpeg|jpg|png|gif/;\n    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());\n    const mimetype = allowedFileTypes.test(file.mimetype);\n    if (mimetype && extname) {\n        cb(null, true);\n    }\n    else {\n        cb(new Error(\"Only images are allowed (jpeg, jpg, png, gif)\"));\n    }\n};\nconst upload = (0, multer_1.default)({\n    storage,\n    limits: { fileSize: 5 * 1024 * 1024 },\n    fileFilter,\n}).single(\"files\"); // Change to single file upload for simplicity\nexports[\"default\"] = upload;\n\n\n//# sourceURL=webpack://main-back/./src/middlewares/multer.ts?\n}");

/***/ }),

/***/ "./src/routes/upload.routes.ts":
/*!*************************************!*\
  !*** ./src/routes/upload.routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst upload_controller_1 = __webpack_require__(/*! ../controllers/upload.controller */ \"./src/controllers/upload.controller.ts\");\nconst router = (0, express_1.Router)();\n// Upload a file\nrouter.post(\"/\", upload_controller_1.uploadFile);\n// Get a file by filename\nrouter.get(\"/:filename\", upload_controller_1.getFile);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://main-back/./src/routes/upload.routes.ts?\n}");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;