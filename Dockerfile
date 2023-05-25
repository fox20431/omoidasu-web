# 指定 Nginx 作为基础镜像
FROM nginx

WORKDIR /app

# 将构建文件复制到 Nginx 静态文件目录
COPY dist/ /usr/share/nginx/html/

# 暴露 Nginx 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]