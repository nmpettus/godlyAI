
#!/bin/bash

# Build the React application
echo "Building React application..."
npm run build

# Create a directory for Hostinger deployment
echo "Creating deployment directory..."
mkdir -p hostinger_upload

# Copy build files to deployment directory
echo "Copying files to deployment directory..."
cp -r dist/* hostinger_upload/
cp public/.htaccess hostinger_upload/

echo "Build complete! Upload the contents of the 'hostinger_upload' folder to your Hostinger public_html directory."
echo "Make sure to set file permissions to 644 for files and 755 for directories after uploading."
