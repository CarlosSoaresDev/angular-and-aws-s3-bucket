import { S3 } from 'aws-sdk';

import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME, REGION } from './aws-base';

export class S3BucketBase{

   async GetConfig(): Promise<S3> {
        return await new S3({
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
            region: REGION
        });
    };

    GetBuckerName(): string {
        return BUCKET_NAME;
    };
};