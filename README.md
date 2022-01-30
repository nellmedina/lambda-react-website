# lambda-react-website

### Instantly deploy static website using Serverless components.

<br/>

- [x] **Fast Deployments** - Deploy your entire website or frontend in seconds.
- [x] **CDN, SSL & Custom Domains** - Comes with free CDN, SSL & custom domains out of the box.
- [x] **Built-in Monitoring** - Monitor your website right from the Serverless Dashboard.

<br/>

## Test Locally

This will start React server running at http://localhost:3000.

```
npm install

npm start

npm run build

npm run test
```

<br/>

## Install

This is using Serverless V3 so the Components is now separate.

```
npm install -g serverless

npm install -g @serverless/components
```

<br/>

## Deployment

Refer to [Serverless Website](https://github.com/serverless-components/website) for more details.

```
components deploy
```

What are the resources created?

- AWS S3 Bucket for hosting

- AWS CloudFront for CDN

And if you set a domain:

- AWS ACM Certificate for SSL

- AWS Route53 for DNS

<br/>

## Login to Serverless Dashboard

```
components login
```

<br/>

## Remove all Infrastructure

```
components remove
```
