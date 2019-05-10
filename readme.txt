npm run build
npm run watch
npm run serve

server {
  listen 80 default_server;
  #listen [::]:80 default_server;

  root /var/www/vue-basic;

  index index.html;

  server_name vue-basic.com;

  location / {
    try_files $uri $uri/ /index.html;
  }

  #location /test/id {
  #   index index.php;
  #   add_header Access-Control-Allow-Origin *;
  #   if (-f $request_filename) {
  #	break;
  #   }
  #   rewrite ^(.*)$ /index.php last;
  #}



}