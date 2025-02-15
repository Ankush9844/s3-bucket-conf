//User Policy for bucket restriction >>>

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}


//Bucket policy for bucket-restriction >>>

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::your-account-id:user/developer-username"
            },
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name"
        },
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::your-account-id:user/developer-username"
            },
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        },
        //If bucket is public and need object access then we can add below lines
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::stack-bucket-9844/*"
        }
    ]
}

