# Resume Studio - Deployed Version

## Overview
This is the built version of **Resume Studio**, a professional resume design service website. The project was created using **React** and built with **Vite** for optimized performance.

## Deployment
After building the project, the output files are located in the `dist/` directory. These files are ready to be deployed on any static hosting provider such as:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- **Apache/Nginx Servers**

## How to Deploy
### 1. Using Vercel or Netlify
Simply upload the `dist/` folder to the hosting provider.

### 2. Deploying on GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/resume-studio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### 3. Deploying Manually (Apache/Nginx)
1. Copy all contents from the `dist/` folder to your server's web root directory.
2. Ensure the server is configured to serve `index.html` for routing.

## Project Structure (After Build)
```
/dist
 ├── assets/        # Minified and optimized static assets
 ├── index.html     # Main entry point
 ├── favicon.ico    # Favicon for branding
 ├── manifest.json  # Web app manifest (if included)
 ├── robots.txt     # SEO-related file
 └── 404.html       # Custom 404 page (if applicable)
```

## Notes
- Ensure that your hosting platform supports **client-side routing** if you're using React Router.
- If deploying to a custom server, make sure **.htaccess** or **Nginx rewrite rules** are configured properly for SPA routing.

## Contact
For any deployment issues or questions, feel free to reach out!

---
🚀 **Resume Studio** - Professional Resume Design Services

