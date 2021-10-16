import * as cdk from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from '@aws-cdk/pipelines';


export class CdkStaticWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'StaticWebsitePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('balajiram/cdk-static-website', 'master'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}
