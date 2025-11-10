import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../public/images');
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'product-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// Configure multer with more permissive settings
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only .png, .jpg, .jpeg and .webp format allowed!'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5 // Max 5 files
  }
});

// Middleware to handle file uploads with any field name
const handleFileUpload = (req: any, res: any, next: any) => {
  const uploadHandler = upload.any(); // Accept any field name

  uploadHandler(req, res, (err: any) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(400).json({
        success: false,
        message: err.message || 'Error uploading files',
      });
    }
    next();
  });
};

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Create product with file upload (supports both 'images' and 'files' field names)
router.post('/', handleFileUpload, createProduct);

// Update product with file upload (supports both 'images' and 'files' field names)
router.put('/:id', handleFileUpload, updateProduct);

router.delete('/:id', deleteProduct);

export default router;
