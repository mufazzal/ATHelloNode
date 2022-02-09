resource "aws_instance" "AT_ec2" {

    launch_template {
        name = var.launchTemplateName 
        version = "$Default"
    }
}

variable "launchTemplateName" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}

output "public_dns" {
  description = "ID of the VPC"
  value       = aws_instance.Jenkin_Master.public_dns
}

output "id" {
  description = "ID of the VPC"
  value       = aws_instance.Jenkin_Master.id
}

output "public_ip" {
  description = "ID of the VPC"
  value       = aws_instance.Jenkin_Master.public_ip
}

