npm run build
npm run watch
npm run serve

nginx config:
    server {
      listen 80 default_server;

      root /var/www/vue-basic;

      index index.html;

      server_name vue-basic.com;

      location / {
        try_files $uri $uri/ /index.html;
      }
    }

