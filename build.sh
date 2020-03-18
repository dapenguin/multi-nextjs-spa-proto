# Build the apps
npm --prefix ./test-nextjs-category run build
npm --prefix ./test-nextjs-product run build

# Copy built assets to the assets folder used by the CDN.
rm -rfv ./test-nextjs-assets/.next/*
mkdir -p ./test-nextjs-assets/.next
cp -a ./test-nextjs-product/.next/. ./test-nextjs-assets/.next/
cp -a ./test-nextjs-category/.next/. ./test-nextjs-assets/.next/
