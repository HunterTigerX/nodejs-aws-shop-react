const cdk = require('aws-cdk-lib');
const { Stack } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');
const origins = require('aws-cdk-lib/aws-cloudfront-origins');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');
const path = require('path');

class WebsiteStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
      bucketName: "huntertigerx",
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      // Keep the bucket private with block public access
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // Create CloudFront distribution with Origin Access Control
    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket, {
          // This will automatically create and configure Origin Access Control
          originAccessIdentity: undefined
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        // Add caching optimization
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      defaultRootObject: "index.html",
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html"
        }
      ]
    });

    // Deploy site contents to S3
    new s3deploy.BucketDeployment(this, "WebsiteDeployment", {
      sources: [s3deploy.Source.asset(path.join(__dirname, "../../app/dist"))],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ["/*"]
    });

    // Output CloudFront URL only since S3 won't be directly accessible
    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.distributionDomainName
    });

    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId
    });
  }
}

module.exports = { WebsiteStack };
