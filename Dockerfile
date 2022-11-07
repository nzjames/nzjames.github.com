FROM pierrezemb/gostatic
COPY ./public /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
