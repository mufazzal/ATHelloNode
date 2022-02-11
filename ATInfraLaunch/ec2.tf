provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "AT_ec2" {

    launch_template {
        name = var.launchTemplateName 
        version = "$Default"
    }
    tags = {
      Name = "AT-Test-${var.name}"
      s3SourceCodeFilePath = var.s3SourceCodeFilePath
    }
}

variable "launchTemplateName" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}


variable "name" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}


variable "s3SourceCodeFilePath" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}

output "public_dns" {
  description = "ID of the VPC"
  value       = aws_instance.AT_ec2.public_dns
}

output "id" {
  description = "ID of the VPC"
  value       = aws_instance.AT_ec2.id
}

output "public_ip" {
  description = "ID of the VPC"
  value       = aws_instance.AT_ec2.public_ip
}

output "private_ip" {
  description = "ID of the VPC"
  value       = aws_instance.AT_ec2.private_ip
}

