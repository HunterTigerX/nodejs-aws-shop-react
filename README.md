1. Task: https://github.com/rolling-scopes-school/aws/blob/main/aws-developer/02_serving_spa/task.md
2. Screenshot:
![image](https://github.com/user-attachments/assets/f1c6b8df-e588-49c0-8ec0-41358fb597b2)
![image](https://github.com/user-attachments/assets/62240ee3-5304-4829-9d08-b345c31983ca)
3. CloudFront Deploy: https://driww1sq5lcii.cloudfront.net
3. S3 Deploy: https://huntertigerx.s3.eu-central-1.amazonaws.com
5. Done 14.02.2025 / deadline 15.02.2025
6. Score: 100 / 100
- Basic Scope
- [x] **+30** S3 Bucket was created and configured properly. The Application was uploaded to S3 Bucket and is available over the Internet, but the rest of the requirements are not done.
- [x] **+40** a CloudFront distribution is created and configured properly; the Application is now served with CloudFront and is available over the Internet via CloudFront URL.
- [x] **+30** S3 Bucket was created, Application was deployed, CloudFront Distribution and Invalidation created and configured by using AWS CDK. The Application can be built and deployed by running npm script commands.

Descripton of work
1. AWS account was created.
2. In IAM new user was created. All user credentials were saved for future usage.
3. The project was forked to my repository.
4. All  necessary extensions and applications were installed and configured with the AWS user1 (not root user) credentials.
5. For manual deployment, the forked project was installed on local machined, dependencies were installed, minor changes were made, application was build.
6. In AWS new bucket was created, configured.
7. The dist folder was uploaded to the S3 bucket and the availability was checked.
8. CloudFront distribituin was created and availability was checked.
9. Everything was cleaned and AWS had no buckets and traces.
10. Using previously installed components and console, after I logged with my credentials, folder with CDK files and config was created.
11. Using guides and Q, I changed the project structure, by creating app folder for the provided app and infrastructure folder for the SDK config.
12. Add and configured S3 bucket using CDK. For testing purposes, made it availiable for public, but then closed access, so it will return 403 again.
13. Manually created a CloudFront invalidation, but then destoyed again the infrastructure to make the process fully automatic.
14. Generated custom setup for automatic deployment using cdk init app --language javascript, project structure was created, all files were moved to the appropriate directory.
15. The custom setup was updated to create S3 bucket and to create and configure CloudFront distribution, using AWS CDK. Scripts were again updated to build project with legacy support, all code was updated for this support. Basic config don't support the requirements.
16. Application was built and deployed using npm run deploy, bucket and cloudfront distribution was created and configured in the proccess, commits were uploaded to the task-2 branch, pull request was created. s3 shows 403 forbidden, cloudfront link is available. In the bottom, there is a minor change, HunterTigerX Shop.
17. CloudFront invalidation was configured, scripts to build, upload to my S3 bucket, and invalidate CloudFront cache was added or updated. Readme was updated. Now everything works automatically but can be run separately if needed.