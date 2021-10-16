#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStaticWebsiteStack } from '../lib/cdk-static-website-stack';

const app = new cdk.App();
new CdkStaticWebsiteStack(app, 'CdkStaticWebsiteStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  }
});

app.synth();
