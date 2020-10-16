project = "react-github-profile"

app "react-github-profile" {
    build {
        use "docker" {}
    }

    deploy {
        use "docker" {
            service_port=80
        }
    }
}