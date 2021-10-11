# New Outline

~Sections~

* Home Page
* Architecture
* User Guide
* Installation
* Admin UI Guide
* Automation
* API

---

## How strongDM Works - Architecture - Index

1. Authorization

    * Access `(Rewrite)`
    * Authentication `(Rewrite)`
    * Composite Role `(Rewrite)`
    * Permissions Levels `(Rewrite)`
    * Roles `(Rewrite)`
    * Service Account `(Rewrite)`
    * Temporary Access `(Rewrite)`
    * Users `(Rewrite)`
    * Parent/Child Org `(New Article)`

+ Blog: RBAC best practicies. How to properly setup access infrastructure based on company needs.
+ Blog: Just in time access. Giving access to the right people, but only when they need it.
+ Blog: Humans and Robots. Deciding how and why to access specific access grants.
+ New Articles: This section probably won't see many new articles. But as we expand the strongDM offering making sure these peices line up with how we operate.
+ Rewrites: These articles can be expanded from just saying what it is, to how it fits into the authorization schema here at strongdm. e.g.
    + Access: It is a grant assigned to an account. How it fits, grants are the building blocks of a customers access infrastructure. These will be used to establish a plan for static and dynamic grants. Starting here will enable granular persmission controls which can then be used by the next layers of the authorization tree, i.e. Roles.

2. Deployment

    * Client `(Rewrite)`
    * CPU Monitoring `(Rewrite)`
    * Datasources `(Rewrite)`
    * Environment Variables `(Review Engineering)`
    * Liveness check `(Rewrite)`
    * Gateway `(Rewrite)`
    * Relay `(Rewrite)`
    * Ports guide `(Review Engineering)`
    * Selinux `(Rewrite)`
    * Servers `(Rewrite)`
    * Websites `(New Article)`
    * Clouds `(New Article)`

+ Blog: What makes a good deployment strategy? Inventory, Plan, Deploy, Monitor.
+ Blog: High Availability Access. Proper reducency while minimizing latency.
+ Blog: Access double check. How to navigate an access audit.
+ New articles: adding items as we expand the product. 
+ Rewrites: We should focus on creating an schematic or breakdown for each piece of the strongDM deployment. e.g.
    Gateway: How does it work? What are the limitations? What modes are available? What considerations do you take when deploying?

3. Security

    * API Security `(Review Engineering)`
    * Audit Logging `(Rewrite)`
    * Credential Handling `(Review Engineering)`
    * Credential Leasing `(Review Engineering)`
    * Crednetial managers (Vault) `(New article)`
    * Device and Identity `(Review Engineering)`
    * Encrypted Connection `(Review Engineering)`
    * strongDM Network `(Review Engineering)`

+ Blog: Auditing a databreach.
+ Blog: Encryption end-to-end. How does strongDM secure data in transit?
+ Blog: Credential strategies. Maximize security by minizing existing credentials.
+ New articles: Adding Vault creates a major shift in our architecture and we need an article to show it.
+ Reviews: Review with engineering and product for accuracy. Possibly expand on content. Everything is superficial right now, this may be because we don't want to say too much. But if not, I think it would be very cool to turn these into whitepapers on how we've decided to handle security here.

---

## User Guide

1. Client Installation

    * Windows `(Rewrite)`
    * macOS `(Rewrite)`
    * Linux `(Rewrite)`

1. Client Authentication

    * User Accounts `(New Article)`
    * Service Account - Windows `(Rewrite)`
    * Service Account - macOS and Linux `(Rewrite)`

1. Usage Guide

    * CLI Introduction `(Rewrite)`
    * GUI Introduction `(Rewrite)`

1. Connecting to Resources

    * Datasources `(Rewrite)`
    * SSH `(Rewrite)`
    * RDP `(Rewrite)`
    * Kubernetes `(Rewrite)`
    * Websites `(Review)`

1. Troubleshooting FAQ `(Rewrite)`
1. Getting Help

+ Blog: Adapting my developer workflow to strongDM
+ Blog: CLI vs GUI: Understand how to use both.
+ Rewrite: Essentially rewrite everything to be user friendly. Start with the installation guides and just work down the list. I would say this is probably the most important section to remake.
+ Rewrite: Troubleshooting, this article needs to be reimaginged. If it is to stay, then turing it into a diagnositcs center breakdown would make more sense. Teaching customers how to pull metrics from their client, Grab logs from their gateways. Read errors and compare what is a strongDM problem, and what is an SSO problem and what is a database problem.


---

## Installation ( Tutorials )

1. Getting Started
2. Install your Gateway

    * AWS - EC2 `(New Article)`
    * AWS - ECS `(Rewrite)`
    * AWS - EKS `(New Article)`
    * Azure - VM `(New Article)`
    * Azure - Containers `(New Article)`
    * Azure - AKS `(New Article)`
    * GCP - Compute `(New Article)`
    * GCP - Cloud Run `(New Article)`
    * GCP - GKE `(New Article)`
    * Linux `(New Article)`
    * Docker `(Rewrite)`
    * Kubernetes `(Major Rewrite)`

+ Blog: Choose your environment, on-prem, single-cloud or multi-cloud. How to do a cost benefit analysis for your options.
+ Blog: Managed service or self managed. What deployment options will actually save you time?
+ Rewrite: Start with rewriting the on-prem options. Linux, Docker, Kubernetes. Then AWS, then Azure and GCP.

3. Configure Single Sign-On (SSO)

    * Getting Started `(Review)`
    * ADFS `(Review)`
    * Azure `(Review)`
    * KeyCloak `(Review)`
    * Google `(Review)`
    * Okta `(Review)`
    * OneLogin `(Review)`

+ Blog: Your SSO's best friend. We work hand in hand with your provider of choice, extending your authorization options all the way to the your database.

4. Configure Logging

    * Getting Started `(New Article)`
    * AWS - S3 `(Rewrite)`
    * AWS - CloudWatch `(Rewrite)`
    * Azure - Blob Storage `(New Article)`
    * Azure - Monitor `(New Article)`
    * GCP - Cloud Storage `(New Article)`
    * GCP - Cloud Logging `(New Article)`
    * local - log aggregator `(New Article)`
    * local - ELK `(New Article)`
    * [Importing strongDM logs into an ELK stack](http://borgified.github.io/jekyll/update/2018/01/02/sdm-in-elk.html) , contributed by an anonymous strongDM user

+ Blog: Do you know who deleting your root files? Audit every action with strongDM.
+ Rewrite: This section is one that deserves a LOT of attention. Logs and auditing are probably the hardest piece to get right with strongDM. I've heard customers say they have no idea how our logs work they just ship it all into an S3 bucket and hope they don't need it... We need to make is so finding and understand logs is so easy, when you ask a question about who did what and when, a customer can find the answer on their own in a few minutes.

---

## Admin UI Guide ( Informational )

1. Getting Started

    * Key concepts `(Rewrite)`
    * Admin UI Tour `(New Article)`

+ Rewrite: Making this section actually be useful. Possibly a video walk through and an index for key areas of the UI.

2. User Management

    * Users `(Rewrite)`
    * Service Accounts `(Rewrite)`
    * Roles `(Rewrite)`

+ Rewrite: Add more information on what a user is to strongDM. What is the best way to manage users. How to manage permissions per role etc..

3. Infrastructure Management

    * Gateways/Relays
        * Gateways `(Rewrite)`
        * Relays `(Rewrite)`
    * Datasources
        * Add Datasource `(Rewrite)`
        * all
        * one
        * two
        * three
    * Servers
        * SSH Public Key `(Rewrite)`
        * SSH Certificate Based `(Rewrite)`
        * RDP `(Rewrite)`
        * Kubernetes `(Major Rewrite)`
        * Kubernetes Basic Auth `(New Article)`
        * Kubernetes Service Account `(New Article)`
        * AKS `(New Article)`
        * AKS Basic Auth `(New Article)`
        * AKS Service Account `(New Article)`
        * GKE `(Major Rewrite)`
        * EKS `(Major Rewrite)`
    * Websites
        * http `(Rewrite)`
        * http basic auth `(New Article)`
        * http custom auth `(New Article)`

+ Rewrite: This section needs a major overhual. Getting to the point where each item makes sense for its corresponsing piece of the admin UI.
+ Rewirte: The first move I would make here is create each of the missing articles.

4. Audting

    * Getting Started `(New Article)`
    * Activities `(New Article)`
    * Queries `(New Article)`
    * Kubernetes `(New Article)`
    * RDP `(New Article)`
    * SSH `(New Article)`
    * Web Logs `(New Article)`

5. Settings

    * Admin Tokens
        * Admin Tokens `(Rewrite)`
        * API Keys `(Rewrite)`
    * Authentication
        * SSO `(Rewrite)`
        * MFA Duo
        * Timeouts
        * Passwords
    * Log Encryption & Storage
        * Getting Started `(Rewrite)`
        * Store with strongDM `(Rewrite)`
        * Local Encryption `(Rewrite)`
        * Remote Encryption `(Rewrite)`
        * Log locally  `(Rewrite)`
    * Ports
        * Ad Hoc `(Rewrite)`
        * Port Overrides `(Rewrite)`
    * SSH
        * CA Setup
        * Port-forwarding

---

## Automation

1. Getting Started

    * About the REST API `(New Article)`
    * About the SDM CLI `(New Article)`
    * Filters
    * Tags

2. Software Development Kits ( SDKs )

    * About the SDM SDKS  `(New Article)`
    * Go `(Major New Article)`
    * Python `(Major New Article)`
    * Ruby `(Major New Article)`
    * Java `(Major New Article)`
    * Terraform `(Major New Article)`

3. Configuration Management Tools

    * Ansible `(Major Rewrite)`
    * Chef `(Major Rewrite)`
    * [Chef cookbook for automated SSH and gateway provisioning](https://supermarket.chef.io/cookbooks/strongdm) , contributed by **Applause**
    * CloudFormation `(Major Rewrite)`
    * User Data ( AWS Server Self-reg ) `(Major Rewrite)`

4. Containers

    * Self-Registering Gateways `(Major Rewrite)`
    * client continer `(Major Rewrite)`
    * strongdm Dockerfile `(Major Rewrite)`

5. Temp Access Integrations

    * Slack with Hubot Chatbot
    * PagerDuty Schedules

6. Importing

    * Users
    * Roles
    * Datasources

7. Password Rotation for Resources
8. Sidecar `(hidden)`
