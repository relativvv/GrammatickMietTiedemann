FROM node:latest
RUN mkdir /root/proj
WORKDIR /root/proj
RUN apt-get update
COPY node.sh /root/node.sh
CMD ["/root/node.sh"]
