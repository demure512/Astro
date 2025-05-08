#!/bin/bash

# Add all changes
git add .

# Commit with message
git commit -m "new post"

# Push to main branch
git push -u origin main

echo "Upload completed successfully!" 