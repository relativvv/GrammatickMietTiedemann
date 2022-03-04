FROM nginx:latest
RUN mkdir /root/proj
WORKDIR /root/proj
RUN apt-get update
RUN apt-get install software-properties-common apt-transport-https lsb-release ca-certificates wget -y
COPY config/nginx.conf /etc/nginx/conf.d/backend.conf

# Install PHP
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
RUN apt-get update
RUN apt-get install php8.0 php8.0-cli php8.0-cgi php8.0-fpm php8.0-gd php8.0-mysql php8.0-imap php8.0-curl php8.0-intl php8.0-pspell php8.0-sqlite3 php8.0-tidy php8.0-xsl php8.0-zip php8.0-mbstring php8.0-soap php8.0-opcache php8.0-common php8.0-readline php8.0-xml -y
RUN echo "listen = 0.0.0.0:9000" >> /etc/php/8.0/fpm/pool.d/www.conf

# Install Composer
#COPY install-composer.sh /root/install-composer.sh
#RUN chmod +x /root/install-composer.sh
#RUN /root/install-composer.sh
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === '$(curl -sS https://composer.github.io/installer.sig)') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN chmod 766 composer-setup.php
RUN rm /etc/nginx/conf.d/default.conf
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN rm composer-setup.php

# Install Symfony CLI
RUN echo 'deb [trusted=yes] https://repo.symfony.com/apt/ /' | tee /etc/apt/sources.list.d/symfony-cli.list
RUN apt-get update
RUN apt-get install symfony-cli -y
