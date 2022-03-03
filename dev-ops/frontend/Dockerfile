FROM node:latest
RUN mkdir /root/proj
WORKDIR /root/proj
RUN apt-get update
RUN npm install -g npm@6.14.5
COPY node.sh /root/node.sh
RUN chmod +x /root/node.sh
ENTRYPOINT ["/root/node.sh"]
