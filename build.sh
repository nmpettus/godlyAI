
#!/bin/bash

# Make sure we're using the locally installed npm packages
echo "Building React application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please make sure you have installed all dependencies with 'npm install'."
  exit 1
fi

# Create a directory for Hostinger deployment
echo "Creating deployment directory..."
mkdir -p hostinger_upload

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found. Build may have failed."
  exit 1
fi

# Copy build files to deployment directory
echo "Copying files to deployment directory..."
cp -r dist/* hostinger_upload/
cp public/.htaccess hostinger_upload/

echo "Build complete! Upload the contents of the 'hostinger_upload' folder to your Hostinger public_html directory."
echo "Make sure to set file permissions to 644 for files and 755 for directories after uploading."

