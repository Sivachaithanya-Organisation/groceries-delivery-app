# groceries-delivery-app
Groceries delivery based out of react and deploying in ansible
Ansible Project:
1. Master server
2. 2-slave servers
3. ECR

**Note: When the Github actions is trying to login into the master, it shows the below error as unable authenticate because the PEM key file which you have given to github action secret is not authorized for the ansibleadmin user. You have to copy the public key from the "ec2-user" and update it in the "ansibleadmin" user as "authorized_keys" then only the github actions will be able to login into the master server with the ansibleadmin user.

Error: 2026/05/26 04:31:24 ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain**
