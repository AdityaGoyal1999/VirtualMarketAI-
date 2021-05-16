# Virtual Market AI

## Inspiration

The pandemic is here to stay in different parts of the world for a couple of years. And people have grown increasingly conscious of reducing unnecessary contact. Therefore, they tend to use online stores like Amazon over local business. Furthermore, most of the small businesses don't have technical reach and infrastructure to reach to even their audience in their respective communities. So, pin pointing the main threat to local business, we have created an AI based product which helps reduce contact for the customer and store representative.

## What it does

VirtualMarket AI is a mobile Application for both Android and iOS. It helps local businesses create a store easily for themselves where they can upload information about the products they have and discounts offered.

- For the customer, they will be shown specific stores in their community based on their location. The app helps reduce contact for a customer when they visit a local store.
- The AI algorithm of object detection helps the user to checkout the items by just clicking pictures of them without going to a cashier or a kiosk which are high risk due to large public use.
- Moreover, with the Live Video Calling feature, the customer can ask the representatives at the store any questions they have without having to meet them face-to-face. Furthermore, they will can see exclusive deals and collect points when they shop at a local store.

## How we built it

The frontend UI was created using React. The backend comprises several Python scripts to handle object detection and logo detection via Google Cloud Vision. To make the app more user-friendly, there is also customer service where any customer can record using voice to file suggestions, complaints, and questions, which can help a business understand its clients better. The recorded audio from customers are optionally processed for sentiment analysis to compute overall satsifaction for a business, this time accomplished via Google Cloud Language API. To promote business growth, a live stream component is accessible for each registered business whenever they start a product demo or live promotion event. This is build with Owncast, a live streaming application from Linode marketplace, with streaming data capable of being stored in Linode object storage. The frontend and backend connected via endpoints in Flask.

## Challenges we ran into

One of the greatest time consumers was the initial deployment of the back-end server to Cloud Run on Googld Cloud Platform with Continuous Deployment, as none of us had prior experience with hosting on GCP or working with Docker. Additionally, local testing was hard as sometimes the amount of processing overworked our local machines. Instantiating a Linode for VSCode server in the cloud temporarily provided extra memory when needed.

## Accomplishments that we're proud of

- The overarching accomplishment of the team was integrating several pieces of AI tools with an elegant yet comprehensible UI to form a smart app for needy local businesses and community customers alike.
- We are quite confident on the potential the application has to bring about customer growth for local businesses

## What we learned

- Frontend team gained new skills with React and mobile development
- Mastered Cloud Run from Google Cloud Platform to host a backend server
- Learned about Docker and its configuration as it was needed for continuous deployment to Cloud Run from the GitHub repository
- Used CockroachDB with SQLAlchemy in Flask(Python) for Object Relational Mapping (ORM) for the backend databases.
- Got introduced to & used Owncast, for access to live stream components for each registered business whenever they start a product demo or live promotion event
- Got introduced and created Linode instances and client via the official Python API
- Mastered Google Cloud AI solutions for object and logo detection and sentiment analysis from customer audio recordings
- Learned and applied PocketSphinx engine to transcribe speech-to-text even in an offline mode

## Best Use of Google Cloud Platform

We've used Google Cloud Platform efficiently in two ways for optimal performance and security:

1. Google Cloud Run for hosting the back-end server, along with continuous deployment from the GitHub repository and management of API secrets and environment variables
2. Google Cloud Vision APIs for product detection from the images uploaded by users, the results of which are used for billing.
3. Google Cloud Language APIs for sentiment analysis of the user-provided feedback.

## Best Use of CockroachDB

CockroachDB was extensively used in the back-end for seamless database management along with SQL Alchemy. This helped us to ease the database coding process as we could directly use the ORM (Object Relational Mapping) functionality provided to ensure flexibility, security, and modularity of code.

## Best Domain Name from Domain.com

We've registered the domain [virtualmarketai.tech](https://virtualmarketai.tech) from Domain.com for our project. The domain isn't being used currently as our solution is primarily a mobile application (Android/iOS).

## What's next for VisualMarketAI

- Data-driven analytics solutions would be the next logical step. Originally, a stretch goal was set to use the Apriori algorithm for associative mining on which set of products are most popular for a certain business.

## Judging Criteria

1. **Originality** - There is no solution in the market that specifically caters to the local or community based businesses. Moreover, we have gone several steps further to make it pandemic proof by adding advanced features that promote social distancing. The Google Cloud based AI helps in checking out the items a person has at the store. Also, it video calls representatives/attendants in the store to spare themselves from meeting them in person.

2. **Adherence to Theme** - The product is completely based on the theme which is empowering local/community businesses. We went through a robust ideation where we analysed what could be done to increase customers at the store and build an organic reach in their respective communities.

3. **Does the hack work** - Absolutely! We have the frontend & backend up and running. Both the ends make multiple calls across different APIs between themselves and third party services like Google Cloud Platform, Linode etc. Moreover, we have user login page which creates a personal experience.

4. **Learning** - The team had to go through an immense amount of learning. We made sure that each member has at least an abstract understanding of what technologies we are using in the whole application. For example, 3 members of our team aren't specialised in AI/ML so the member who is proficient in it explained what was happening in the algorithm. We also made the effort to go over several resources ourselves. Moreover, the front-end team had experience with React but the application had to use React-Native which has a decent learning curve itself. The backend team had to go through CI/CD process to test out the features and learning how to use Docker. We also had to learn how to use Linode which is one of the sponsors.

5. **Technology** - We personally believe that the project uses quite complex and modern technologies like AI/ML, GCP, ReactNative, Owncast(Video calling service), CI/CD(Docker).
   These technologies were quite hard to get their head around but by splitting up the task properly and working countless hours, we were able to pull this project off.
   We had to put together a lot of components to build this project.
   Finally, the project and technologies always made us excited and go "wow"

## GitHub Repositories

1. [Front-end GitHub repository (using React Native)](https://github.com/AdityaGoyal1999/VisualMarketAI-)
2. [Back-end GitHub repository (using Flask)](https://github.com/rishi255/visual-market-ai-backend)
