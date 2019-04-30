npm run build
npm run watch
npm run serve

nginx config
location / {
  try_files $uri $uri/ /index.html;
}
