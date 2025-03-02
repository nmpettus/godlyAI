
# Deployment Instructions for Hostinger

## Prerequisites
- Node.js and npm installed on your local machine
- FTP client (like FileZilla) or Hostinger File Manager access

## Build and Deploy

### 1. Build the Application
```bash
# Make the build script executable (Linux/Mac)
chmod +x build.sh

# Run the build script
./build.sh
```

### 2. Upload Files to Hostinger
1. Log in to your Hostinger account
2. Navigate to your hosting control panel
3. Use the File Manager or connect via FTP
4. Go to the `public_html` directory
5. Upload all files from the `hostinger_upload` directory to `public_html`

### 3. Set Permissions
After uploading:
- Set file permissions to 644 for all files
- Set directory permissions to 755 for all directories

### 4. Test Your Website
Visit your domain to ensure everything is working correctly.

## Troubleshooting
- If you encounter 404 errors for routes other than the home page, ensure the `.htaccess` file was properly uploaded
- Check that your domain's DNS settings are correctly configured
- Verify that you've set the correct file permissions

## Notes
- This is a single-page application (SPA) that uses client-side routing
- The included `.htaccess` file redirects all requests to index.html to support SPA routing
