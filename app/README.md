# mvp-frontend
A demo app for using EduVault for user authentication and cloud data storage.
[Live site](https://thirsty-ardinghelli-577c63.netlify.app/home)

### current status

Achieved Textile integration with threads for data and Buckets for files(uploaded images)

next steps:

- [ ] Share, export and import decks.
- [ ] Shared editing
- [ ] More crypto wallets
- [ ] More data replication options
- [ ] Move login page to be hosted by the backend
- [ ] Create app signup dashboard
- [ ] Create npm package, or vuex module to make integration easy for devs
- [ ] Integrate a CRDT or other better sync merging tactic
- [ ] refactor based on Textile's refactor


## References
 - https://paweljw.github.io/2018/04/vue.js-front-end-app-part-6-deploying-to-s3/
 - https://medium.com/@nicolas.bizard/how-to-secure-with-ssl-your-static-s3-website-356f71f08e24
 - https://medium.com/@ristinolla/redirect-root-domain-to-www-subdomain-with-ssl-enabled-using-aws-cloudfront-and-s3-f373c3d7f935
 - https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html#redirect-rule-examples (s3 redirect rules)



# Brian's Deploy notes

aws s3 sync ./dist/ s3://eduvault-alpha-s3/dist/ --region us-west-2 --profile ipfc