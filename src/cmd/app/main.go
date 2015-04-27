package main

import (
  "fmt"
  "log"
  "net/http"
)

const (
  port=3000
)

func main() {
  fs := http.FileServer(http.Dir("static"))
  http.Handle("/", fs)

  log.Printf("Listening on port %d...\n", port)
  http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
