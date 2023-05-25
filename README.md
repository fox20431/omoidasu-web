# 思い出す　Web



## ABOUT GITHUB ACTIONS WORKFLOWS

I think it is necessary why I build the docker image on the remote server, not github actions server.

First, I don't have personal docker registry, it means that I have to expose my docker on public, it's dangerous because it contains sensitive information which is primarilly localted in environment variables.

Second, I can compress the docker image built on the github actions server as tar, and transfer it to remote server. but the transfer time is so long, I rather than use server to do the operation.