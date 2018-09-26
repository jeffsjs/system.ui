FROM nginx:latest

WORKDIR /usr

COPY  . /usr/share/nginx/html

COPY conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

