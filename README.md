# Cloud Thread – GitOps Kubernetes Infrastructure

This repository implements a **production-grade GitOps workflow** for deploying the **Cloud Thread** application to Kubernetes using **Terraform, Helm, Argo CD, and GitHub Actions**.

The setup cleanly separates **infrastructure**, **application packaging**, and **deployment automation**, following modern DevOps best practices.

---

## Architecture Overview

### Tools & Responsibilities

| Tool | Responsibility |
|----|----|
| **Terraform** | Provision Kubernetes platform components |
| **Helm** | Package Kubernetes manifests |
| **Argo CD** | GitOps continuous delivery |
| **GitHub Actions** | CI: build, tag, push images & update Helm values |
| **Kubernetes** | Runtime environment |

---

## Deployment Flow (GitOps)
```bash
Developer → git push
↓
GitHub Actions

Build Docker image

Tag with commit SHA

Push to Docker Hub

Update Helm values.yaml

Commit changes
↓
Argo CD

Detects Git change

Syncs Helm chart

Applies to Kubernetes
↓
Kubernetes

Rolling update of Pods
```

**No `kubectl apply` or `helm install` is used for application deployments.**

## Repository Structure

```text
cloud-thread/
├── app/                    # Node.js Express application
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
│
├── helm-thread/         # Helm chart for the app
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── deployment.yaml
│           └── service.yaml
│
├── terraform/               # Platform infrastructure
│   ├── providers.tf
│   ├── namespace.tf
│   ├── argocd.tf
│   └── main.tf
│
└── .github/
    └── workflows/
        └── ci.yml           # CI pipeline

