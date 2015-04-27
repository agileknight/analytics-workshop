FROM golang
ADD ./src /go/src/github.com/agileknight/analytics-workshop
ADD ./static /opt/static
RUN go install github.com/agileknight/analytics-workshop/cmd/app
ENTRYPOINT /go/bin/app
WORKDIR /opt
EXPOSE 3000
