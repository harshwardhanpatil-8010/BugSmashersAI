output "s3_artifacts_bucket" { value = aws_s3_bucket.artifacts.id }

output "ecr_repository" { value = aws_ecr_repository.app.repository_url }

output "alb_dns" { value = aws_lb.app.dns_name }