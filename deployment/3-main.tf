terraform {
  backend "s3" {
    bucket  = "oscantores-env-files" # Your unique AWS S3 bucket
    # create a sub-folder called develop
    key     = "develop/oscantores.tfstate"
    region  = "sa-east-1" #var.aws_region # Your AWS region
    encrypt = true
  }
  cloud {

    organization = "oscantores"

    workspaces {
      name = "workspace-oscantores"
    }
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"

  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "m_webhost" # Your fullname
  }
}

