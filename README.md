# ELK TRAINING MECHANISM: KANGAROO

Training generative language models that have, in the present day, scaled up to have parameters in the order of hundreds of billions, on humongous text datasets, requires a fair bit of infrastructure and is a rather expensive technique to execute. Moreover, specifically with regard to the field of AI Alignment, it would be difficult to ensure or even evaluate, a large model that is trained, to not in fact be a deceptive AI. 

A potential approach to not only significantly reduce the cost and resources required for such training but also to ensure that the generative model continues to be aligned upon scaling is to use smaller generative models to initialize larger ones for training. 

Kangaroo aims to provide an interface for alignment researchers to initialize the weights of large language models with pre-trained smaller language models. Currently, with this interface, any user can utilize it to scale up models and compare performances of three models respectively, small, scaled and large. 

In progress: We intend to add dataset configuration capabilities, interpretability techniques in the coming weeks as we explore mechanistic interpretability related to transformers.


## How To Implement

Clone the frontend of the project.

`git clone https://github.com/ELKTrainingMechanism/Frontend.git`

Clone the backend of the project.

`git clone https://github.com/ELKTrainingMechanism/backend.git`
`pip install -r requirements.txt`

Run both on your system to load up the interface.

Once it's up and running, create an account to keep track of models of various parameters that you would like to train. (We will soon add capabilities to train without creating an account.)

Once logged in, to begin training, go to 'Train', enter the respective parameter sizes you desire, the credentials of the GPU you wish to train this with, and submit the details. Do not close this page until training is complete!

Open the Profile page in a * new tab * and view the current status of the running model. Refreshing the Profile tab will lead to eventually displaying the results of the models in terms of cross-entropy and perplexity, as well as the time it took to run. We are endeavoring to add additional metrics soon.
