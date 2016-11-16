"use strict";



let firstEssay = {
    essayNumber: "01",
    title: "Var versus Let: A Discussion on Being a Noob",
    introduction: "Let's take it from the beginning with variable declarations.",
    datePosted: "June 3, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `It may have been because I was a Javascript noob—still am, perhaps—that I was steadfast in my use of var for variable declarations and reluctant to let it go. Var was there from “Hello, world,” and I knew what it did for each variable declaration thereupon: it created a global variable or a local variable, depending on the scope in which it was declared, and there, too, was this inherent hoisting behavior. I knew it; I knew var. Then I was introduced to let, and with tense shoulders, I stuck out my hand and politely said, “Nice to meet you.” In my head, though, I was not so welcoming and was thinking, “Nuh-uh. Nuh-uh. We're not hanging out. I'm sticking with var.”`
        },
        {
            contentType: "Text",
            content: `Comfort: it is a state we are naturally disposed to be in. It is in environments that affect us with a sense of it that we retire to when we are weary and stressed. Comfort is familiarity—a response, really, to stimuli that no longer challenges or unnerves, as what is gradually gained in the acclimation to a foreign setting or through exposure to an alien topic. Comfort is what defined my relationship with var: I was comfortable in my use of it, and I was hesitant to—no, maybe adamant to not—ditch it and re-familiarize myself with the different, unfamiliar behaviors of let declarations.`

        },
        {
            contentType: "Text",
            content: `But it is in comfort where learning is no longer active, where we no longer are a noob, for we have already learned about and familiarized ourselves with the alien and unknown—and that, precisely, is why comfort is placidity which is not growth but stagnation. And you cannot be stagnant if you want to be a software developer, or even a purposeful human being: technology evolves, and so, too, does time move forward, both waiting for no one, especially you—and especially me, of course.`
        },
        {
            contentType: "Text",
            content: `I actually learned far more than I anticipated exploring the distinctions between var and let declarations, and I as well reinforced material I had already been somewhat familiar with. So, let me take it from the beginning.`

        },
        {
            contentType: "Text",
            content: `Variables in Javascript can be declared in three ways:`

        },
        {
            contentType: "Image",
            content: `00-00-image.png`

        },
        {
            contentType: "Text",
            content: `As indicated in the image above, a variable can be declared with one of three keywords: var, let, or const. And the syntax is the same for whichever keyword is used. What follows the keyword is the name of the declared variable, which is known as the identifier. Following the assignment operator, the equal sign, is the initialized value for the variable, which is, in this case, the boolean value of true for each variable. And that, simply, is a variable declaration. Before I move on from the const keyword, I would like to note that the uniqueness in const declarations, besides being block-scoped like let, is that the identifier cannot be used again throughout the entire document, and it cannot be re-declared with a new value. So, in referring to the above image, in that document there cannot be another variable with the identifier of constVariable, or an error will be thrown, and it, as well, cannot be re-declared with another value, such as false. That is the extent to which the const keyword will be discussed here: the const keyword declares a read-only variable with a unique identifier that remains constant throughout the entire document.`
        },
        {
            contentType: "Image",
            content: `00-01-image.png`

        },
        {
            contentType: "Text",
            content: `Scope, now, can be thought of as the realm, or context, in which a variable can be declared and accessed from. There is the global scope, which exists on the global object, and there are local scopes, which are nested in the global scope. Traditionally, with var, a variable declared outside of a function is a global variable because it exists in the global realm. These globally-scoped variables are accessible throughout the entire document. This is in contrast to a locally-declared variable, which has a much more limited realm in which it can be accessed from. These local variables traditionally exist within a function, and it is only from within the local function-scope in which the variable was declared  that these variables can be accessed from.`
        },
        {
            contentType: "Image",
            content: `00-02-image.png`

        },
        {
            contentType: "Text",
            content: `Bring forth let. In much the same way that var declarations are function-scoped, let declarations are block-scoped. Prior to ECMAScript 6, block scope did not exist; the variable declared with var, as discussed, would either be a globally-scoped variable or it would be locally-scoped to the function it was declared within. But block statements did exist prior to ECMAScript 6. A local scope just was not created for block statements in the same way as one was created for functions.`
        },
        {
            contentType: "Text",
            content: `A block statement—because it really did not stick to me until I paid attention to what it is—is the block of code contained within a pair of curly braces:`
        },
        {
            contentType: "Image",
            content: `00-03-image.png`

        },
        {
            contentType: "Text",
            content:`Here, the block statement is var block = “cheese”. Using the var declaration, the variable “block” becomes globally-scoped because var variables do not recognize block scopes  as they do with function scopes, and that is why I would be able to log it to the console outside of the block statement and see “cheese.” But if it was a let declaration, an error would have been thrown if I had tried to access it from outside of the block statement; it would have only been accessible from within the block statement.`
        },
        {
            contentType: "Text",
            content:`What I would like to reinforce is that block statements are demarcated by a pair of curly braces—and this is how you can identify the boundaries of a block scope. Yes, when declaring a function, what follows is a block statement:`

        },
        {
            contentType: "Image",
            content: `00-04-image.png`
        },
        {
            contentType: "Text",
            content: `And it is within that type of environment—a block statement attached to a function declaration—that local scopes were only able to be created. But block statements exist elsewhere besides function declarations, as it was introduced a couple of images up, and if a var variable is declared in block statements not associated with a function declaration, such as an if statement, it would be created as a global variable.`

        },
        {
            contentType: "Image",
            content: `00-05-image.png`

        },
        {
            contentType: "Text",
            content: `The variable “iAmLocal” in the image above is a local variable with a block scope, and it is only accessible from within the block it was declared. This is the type of local-scoping that let variables behave in. A var variable in this environment would not belong to a local scope, but instead to the global scope because var variables only recognize block statements attached to a function declaration. That is one of the main distinctions between var and let declarations: with var declarations, local variables are only created if they are declared from within the realm they recognize, which is a block statement attached to a function declaration; with let declarations, on the other hand, local variables are created from within every block statement, not just ones attached to function declarations.`

        },
        {
            contentType: "Text",
            content: `The other main distinction between var and let variables is that var variables are hoisted—or lifted—to the top of the function, or document if it is a global variable. While no actual hoisting ever occurs, what the term refers to is the behavior that occurs when Javascript code is executed. The  declarations are processed first, and the rest of the code in the document is then subsequently processed.  So the declarations are therefore the first things read, which from our perspective puts them at the top of the their respective scopes.`

        },
        {
            contentType: "Image",
            content: `00-06-image.png`

        },
        {
            contentType: "Text",
            content: `That is how you can refer to a variable declared later in the document, as in the image above, and have it return undefined, instead of an error being thrown.`

        },
        {
            contentType: "Text",
            content: `Variables declared with let do not behave similarly. They will actually throw an error if they are referred to prior to their declaration. In fact, the space before  a let variable is declared is known as the temporal dead zone. It is the space in which a let variable is dead, or inaccessible, between where a  block scope begins and the declaration of the variable. It can be visualized as the space a var variable “travels up” when being “hoisted” to the top of the scope. The hoisting behavior is unavailable to let variables, so all that prior space before the declaration of the variable is blind to the future existence of the variable. It can also be illustrated analogously as speaking to a friend and referring to an idea before it has ever been conceived, or referring to someone before he or she has ever been born: in both situations, both things referred to simply do not exist. That is deep.`
        },
        {
            contentType: "HR"

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `I started programming and writing in Javascript in early December of 2015. ECMAScript 6, or ECMAScript 2015, I believe it is now referred to as, had already been published by the time I started to learn to code, so let and const declarations were already available. But in my earlier noob days—as opposed to my current noob days—I felt comfortable with var declarations. Partly because I was still overwhelmed by how much there was to learn about Javascript and coding in general, and var, at the time, just sufficed. Partly also because var was what I learned directly, as well as gleaned, from the multitude of resources available to me. There were hardly any resources that taught with let, and the ones that did gave no explicit details on whether it should be used over var or not. I still do not know if I should be using let and const over var from this point on, but that is not the aim of this piece of writing.`

        },
        {
            contentType: "Text",
            content:`I learned enough about the distinctions between var and let, as well as const, declarations that I am comfortable with using them in their appropriate situations. These are tools, albeit fundamental tools, that I am proficient enough to know the cases in which I would use each of them. And that is one of the purposes of learning: so that you can understand for yourself the hows and the whys, and so that you can then be equipped to make your own decisions with what you have learned, and to not just regurgitate what you receive from one source and another.`

        },
        {
            contentType: "Text",
            content: `And with that, I push you, reader, to break out of your comfort zone and be a noob again in anything and everything for no other reason than to simply learn.`
        }
    ],
    url: "var-versus-let-a-discussion-on-being-a-noob",
    photoHeader: "/images/letVsVarPhotoHeader.jpg"

};



////////////////////////////////////// End First Essay



let secondEssay = {
    essayNumber: "02",
    introduction: "A step-by-step walk-through to deploying a MEAN stack web application to Amazon's EC2.",
    title: "Deploying to EC2: A Tutorial--Well, It Is Like Shotgunning Beer",
    datePosted: "June 6, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `It took me about a day and a half to deploy this Wind-UpDurb MEAN stack web application to the Elastic Compute Cloud (EC2) web service on Amazon Web Services. The time did not include any previous coding I did on a local server to build my application. The day and a half mostly involved laboring through the Amazon documentation to figure out how to set up a virtual server and subsequently figuring out how to set up a domain name and have it point to the EC2 instance hosting my web application.`
        },
        {
            contentType: "Text",
            content: `It, indeed, tried my patience, and although there were bouts of frustration, it was a worthwhile experience. Nonetheless, the entire project could have been simplified and the time could have been drastically cut shorter if I had clearer documentation available to me.`
        },
        {
            contentType: "Text",
            content: `As an utter noob to deploying a web application online to the entire world—this Wind-UpDurb web application being my first—the jargon used in the Amazon documentation, at times, confused and misdirected my unexperienced self. I will admit there were moments of being stumped and moments in which what I was reading was indiscernible to me. I bounced between resources, and even started the entire project over from scratch a small handful of times. But you do not give up when you are lost or when you have failed; you continue to trudge forward, anticipating and welcoming more misguided decisions and failures. You will reach that goal as you iterate with each attempt—as you essay through your endeavors: that, there, is patience and perseverance. Dig it.`
        },
        {
            contentType: "Text",
            content: `With that, let us shotgun these beers that are deploying a web application to an EC2 instance and associating it with a custom domain name, and let us not stop until we have chugged them dry.`
        },
        {
            contentType: "Text",
            content: "But a foreword first. This tutorial assumes that you have already created an account with Amazon Web Services, have created an IAM user for EC2 in which we will work from, and have created an EC2 key pair that will be used to log in to the EC2 instance via SSH. If you have not,"
        },
        {
            contentType: "Link",
            content: " here ",
            link: "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html#create-a-key-pair"
        },
        {
            contentType: "TextAfterLink",
            content: "is a link to get you up to speed because it is healthy, you know, to get some exposure to the official documentation."
        },
        {
            contentType: "Text",
            content: `Also, do not forget to set the permissions of the key pair file that is downloaded locally. That needs to be done; otherwise, the SSH login will be unsuccessful. It can be set with the following terminal command:`
        },
        {
            contentType: "Text",
            content: "$ chmod 400 name-of-your-key-pair-file.pem"
        },
        {
            contentType: "Image",
            content: `01-00-images.png`

        },
        {
            contentType: "Text",
            content: `As you can see in the image above, my key pair is named tutorial-taco-key-pair. After navigating to the directory in which the file will be stored, I then entered the command “chmod 400” followed by the file name. Do that with your key pair file. Please.`
        },
        {
            contentType: "Image",
            content: `01-01-images.png`

        },
        {
            contentType: "Text",
            content: `And with a little buzz on after each of these prerequisites have been satisfied, let us crack open the beer that is setting up our EC2 instance.`

        },
        {
            contentType: "Text",
            content: "This tutorial will be using the MEAN stack image powered by Bitnami. There are a plethora of other images on the AWS marketplace, so you can explore it and choose one that is more to your liking. But this tutorial will be using the Bitnami MEAN stack image, and it can be found "

        },
        {
            contentType: "Link",
            content: "here",
            link: "http://aws.amazon.com/marketplace/pp/B00GXYE87S/ref=srh_res_product_title?ie=UTF8&sr=0-3&qid=1435737629090"
        },
        {
            contentType: "Text",
            content: `After opening the link, click the yellow “Continue” button. On the following page, you can customize your EC2 instance. I opted for the 1-Click Launch after modifying some of the options. You can customize it how you like, but I would suggest at least setting the Instance Type to t1.micro so that you can be within the realm of no charges if your Amazon Web Service account has been active for less than 12 months and it still possesses free credits. Also, for the purpose of this tutorial, we will need to modify the Security Group, but this will be done shortly from within the EC2 Dashboard.  Ensure that the Key Pair associated with this instance is the one you created with the intentions for this particular instance. Verify that at the bottom of the page. When all looks good, launch it with one sweet single click of the button.`
        },
        {
            contentType: "Text",
            content: `You can now navigate back to your EC2 Dashboard, and click on Instances under the Instances label. It could take a handful of minutes for the instance to initialize, but when it goes from this:`

        },
        {
            contentType: "Image",
            content: `01-02-images.png`

        },
        {
            contentType: "Text",
            content: `To this: `

        },
        {
            contentType: "Image",
            content: `01-03-images.png`

        },
        {
            contentType: "Text",
            content: `Then you are ready to proceed.`

        },
        {
            contentType: "Text",
            content: `Let us now configure the Security Group associated with the instance so that specific ports can be accessed. Navigate to Security Groups below Network & Security. Select the Group Name created by Bitnami:`

        },
        {
            contentType: "Image",
            content: `01-32-images.png`

        },
        {
            contentType: "Text",
            content: `There should be three open Inbound Rules in the Security Group:`
        },
        {
            contentType: "Image",
            content: `01-33-images.png`

        },
        {
            contentType: "Text",
            content: `Click the edit button. First, modify the SSH Connection Method so that it can now only be accessed through your IP address, instead of by the entire world. This can be done by selecting “My IP” under Source. Configure two additional inbound rules. Both of the new inbound rules should have “Custom TCP Rule” as the type. Set the Port Range for one of them to “3000” and the other to “27017.” They also should both have “Anywhere” as the source. The Custom TCP Rules will be referenced later in the tutorial, but it pretty much opens the port in which the application will be running on and, when set to 0.0.0.0/0,  make it accessible to the world. Port 3000 will be used by the application, and Port 27017 will be used by MongoDB.`
        },
        {
            contentType: "Image",
            content: `01-34-images.png`

        },
        {
            contentType: "Text",
            content: `When that is complete, we can move on and gather some preliminary information that will be used for the MongoDB login later in the tutorial.`
        },
        {
            contentType: "Text",
            content: `The Bitnami Mean installation pre-configures a MongoDB administrator user name and password with the created instance. The initial user name will be “root,” and you can gather the password by looking into the system log for the instance. You can access the system log by right clicking on the instance, navigating to Instances Settings, and then to Get System Log.`

        },
        {
            contentType: "Image",
            content: `01-04-images.png`

        },
        {
            contentType: "Text",
            content: `All the way at the bottom of the log is the password within its border of pound symbols. Or hash symbols.`

        },
        {
            contentType: "Image",
            content: `01-05-images.png`

        },
        {
            contentType: "Text",
            content: `In the image above, my password is “tcHg487guwH4.” Take a screenshot of it, or store it somewhere for your records.`

        },
        {
            contentType: "Text",
            content: `Next, we will connect to the EC2 instance via SSH. Bring up your terminal and enter as a command the following login template filled in with your information:`

        },
        {
            contentType: "Text",
            content: `ssh -i /path/to/your/key-pair.pem user-name@public-DNS`

        },
        {
            contentType: "Text",
            content: `The first argument following the -i flag is the path to the key pair file that is associated with the instance. The last argument will be the user name “bitnami” followed by an ampersand (@) and again followed by the public DNS name associated with the EC2 instance. You can gather the public DNS by navigating to the EC2 Dashboard, clicking on Instances, and selecting your EC2 instance from the list. Additional information on the instance will open up below it like so:`

        },
        {
            contentType: "Image",
            content: `01-08-images.png`

        },
        {
            contentType: "Text",
            content: `The public DNS, by the way, is what you can enter into the address bar shortly to send you to your EC2 instance.`

        },
        {
            contentType: "Text",
            content: `But first, let us connect to it via SSH. The complete SSH login command should look like:`

        },
        {
            contentType: "Image",
            content: `01-06-images.png`

        },
        {
            contentType: "Text",
            content: `A terminal prompt should appear asking if you would like to continue connecting. Enter “yes,” and you should now be successfully connected to the EC2 instance. If the connection times out after entering the SSH login command, it is likely because the SSH port  does not have the inbound rule to allow access to your IP address. It is the one that we set earlier at the beginning of the tutorial along with the Custom TCP Rule for Port 3000 and Port 27017. If you get the connection timeout, verify the inbound rules in the EC2 Dashboard by clicking on Security Groups under Network & Security. Otherwise, you should be successfully connected and see the welcome text:`

        },
        {
            contentType: "Image",
            content: `01-07-images.png`

        },
        {
            contentType: "Text",
            content: `You can now enter the Public DNS associated with your EC2 instance in the address bar, and you should be taken to a welcome web page:`

        },
        {
            contentType: "Image",
            content: `01-09-images.png`

        },
        {
            contentType: "Text",
            content: `You also can now explore your EC2 instance and all of the directories within it from within the Secure Shell (SSH).`

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `To deploy your code onto your EC2 instance, you will have to clone it down from you GitHub repository.`

        },
        {
            contentType: "Text",
            content: `From within the SSH terminal pane, cd into “apps”:`

        },
        {
            contentType: "Image",
            content: `01-10-images.png`

        },
        {
            contentType: "Text",
            content: `You will want to clone your repository here. Prepend your git clone command with the sudo command (for SuperUser Do); otherwise, you will get a permission denied error. Keep in mind that you will have to use the sudo command  for most of your commands inside the EC2 instance. After cloning your repository,  navigate into it and do all of the setup you would do as if you were trying to run your web application on a local server, such as doing an npm install and a bower install if you are using it. Do not forget to use the sudo command. Also, a thing to note is that I had to run sudo bower install with the “--allow-root” option.`
        },
        {
            contentType: "Text",
            content: `Verify that your web application is set to run on Port 3000 from within your app.js or server.js file, since we set one of the Custom TCP Inbound Rules on Port 3000 earlier in the tutorial. After which, start up your web application how you normally do on a local server. I used “node app.js.” And then it should be running:`

        },
        {
            contentType: "Image",
            content: `01-11-images.png`

        },
        {
            contentType: "Text",
            content: `You can verify that it is running by appending the port number at the end of the DNS and entering that into the address bar in your browser.`

        },
        {
            contentType: "Image",
            content: `01-12-images.png`

        },
        {
            contentType: "Text",
            content: `You now have your web application running on your EC2 instance. But it will stop running when you exit the SSH session. To have you web application continue to run after you exit the SSH session, you will need to bring in the node package forever.js.`

        }, {
            contentType: "Text",
            content: `Enter the command “sudo npm install forever -g”. And then use “forever start script.js” to launch your web application forever—or at least, to have it run continuously after the SSH session closes:`

        },
        {
            contentType: "Image",
            content: `01-13-images.png`

        },
        {
            contentType: "Text",
            content: `You now should have your application running continuously at the DNS of your instance on port 3000. On to Mongo.`

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `The MongoDB shell can be accessed with a simple login command:`

        },
        {
            contentType: "Text",
            content: `sudo mongo admin –username root –password password-from-the-system-log`

        },
        {
            contentType: "Image",
            content: `01-15-images.png`

        },
        {
            contentType: "Text",
            content: `From within the MongoDB shell, you can now create a new user name and password. Navigate into the admin database with “use admin”:`

        },
        {
            contentType: "Image",
            content: `01-16-images.png`

        },
        {
            contentType: "Text",
            content: `And create a new user with db.createUser(). Keep in mind to set the roles to “root.”`

        },
        {
            contentType: "Image",
            content: `01-17-images.png`

        },
        {
            contentType: "Text",
            content: `You can exit the MongoDB shell and login with your new user name and password:`

        },
        {
            contentType: "Image",
            content: `01-18-images.png`

        },
        {
            contentType: "Text",
            content: `You now need to reference the database and include your login credentials from within you application. Open with VIM the application file in which the MongoDB connection is being made. In my application, the connection is being made in app.js:`

        },
        {
            contentType: "Image",
            content: `01-19-images.png`

        },
        {
            contentType: "Text",
            content: `In VIM, press “i” to enter insert mode to allow you to edit the document. The syntax of the URL to MongoDB will be “mongodb://user-name:password@/opt/bitnami/mongodb/tmp/mongodb-27017.sock:27017/admin”.`

        },
        {
            contentType: "Image",
            content: `01-20-images.png`

        },
        {
            contentType: "Text",
            content: `By the way, the path following the ampersand, which is “/opt/bitnami/mongodb/tmp/mongodb-27017.sock:27017/admin,” is found when you connect to MongoDB via the shell right there on the third line of the image down below:`

        },
        {
            contentType: "Image",
            content: `01-22-images.png`

        },
        {
            contentType: "Text",
            content: `After making the edits, hit control-c, and then type “:w” to save the edits. Follow it up with “:q” to exit VIM. Restart the server  and you should see:`

        },
        {
            contentType: "Image",
            content: `01-21-images.png`

        },
        {
            contentType: "Text",
            content: `And now your application has successfully connected to the Mongo database on the EC2 instance. With forever.js running the application continuously, you are good to close out of the SSH shell without worrying about your application not persisting.`

        },
        {
            contentType: "Text",
            content: "Before leaving the SSH shell, though, you might want to re-direct port 80, which is running the Bitnami MEAN Stack welcome screen,  to port 3000 where the web application is running. The purpose of this is so that you do not have to append port 3000 to the end of the URL. I spent a considerable amount of time searching how I could achieve this before I stumbled across "

        },
        {
            contentType: "Link",
            link: "http://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode",
            content: "this "
        },
        {
            contentType: "Text",
            content: "Stack Overflow post."
        },
        {
            contentType: "TextAfterLink",
            content: `So I  suggest reading through it. But the gist of the solution is to enter the following command in the SSH terminal session:`

        },
        {
            contentType: "Text",
            content: `sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`

        },
        {
            contentType: "Text",
            content: `You can test that it is working by entering the DNS of the instance into the address bar sans the appended port number. `

        },
        {
            contentType: "Divider"
        },
        {
            contentType: "Text",
            content: `Lastly, you might want to have a custom domain name point to your EC2 instance. To accomplish this I used Route 53 in Amazon Web Services. `

        },
        {
            contentType: "Text",
            content: `Before heading to the Route 53 Dashboard, let us briefly stick around in the EC2 dashboard so that we can assign an Elastic IP address to the EC2 instance. This Elastic IP address is a static, public IP address associated with your AWS account and assigned to an EC2 instance. Generally, when an EC2 instance is stopped and restarted, a new public IP address is assigned to the instance, but associating an Elastic IP address with it will overcome any potential issues stemming from this behavior by allowing you to permanently tie a public IP address with the instance.`

        },
        {
            contentType: "Text",
            content: `In the EC2 Dashboard, click on Elastic IPs  under Network & Security.`

        },
        {
            contentType: "Image",
            content: `01-25-images.png`

        },
        {
            contentType: "Text",
            content: `Allocate a new address and confirm it:`

        },
        {
            contentType: "Image",
            content: `01-26-images.png`

        },
        {
            contentType: "Text",
            content: `Next, select the newly-allocated address, click the Actions button, and then Associate Address:`

        },
        {
            contentType: "Image",
            content: `01-27-images.png`

        },
        {
            contentType: "Text",
            content: `Select the instance that will be associated with this Elastic IP address, and finally click Associate:`

        },
        {
            contentType: "Image",
            content: `01-28-images.png`

        },
        {
            contentType: "Text",
            content: `You can verify that the Elastic IP address has been associated with the instance by navigating to Instances and selecting the relevant instance:`

        },
        {
            contentType: "Image",
            content: `01-29-images.png`

        },
        {
            contentType: "Text",
            content: `There are two things to keep in mind. First, assigning an Elastic IP address has likely changed the Public DNS of the instance, as the numbers following the “ec2” in the DNS is the Public IP address. Keep this in mind when logging into the SSH session, as the Public DNS is included in the login information. Also, keep in mind that an Elastic IP address not associated with an Amazon EC2 instance will accrue charges. Otherwise, it should be free to have an Elastic IP address associated with an Amazon EC2 instance.`

        },
        {
            contentType: "Text",
            content: `With the Elastic IP address associated with the EC2, we are good to proceed to Route 53.`

        },
        {
            contentType: "Text",
            content: `In the Route 53 Dashboard, you can register a domain name and check on the status of any pending requests. After registering for a domain through Route 53, it can take up to three days for the domain name to propagate, but it is doubtful that it will take that long. It took about two hours for “windupdurb.com” to propagate on an early Saturday night.`

        },
        {
            contentType: "Image",
            content: `01-23-images.png`

        },
        {
            contentType: "Text",
            content: `After it has been registered successfully, you can navigate into the Hosted Zones.`

        },
        {
            contentType: "Image",
            content: `01-24-images.png`

        },
        {
            contentType: "Text",
            content: `Click on the intended domain name to be sent to the record sets associated with it.  Amazon should have created two record sets for you: one for the Name Server with four values, and one for the Start of Authority. We will be creating two A (for address) Records.`

        },
        {
            contentType: "Text",
            content: `Click the Create Record Set button at the top of the page. For the first A Record, enter “www” as the Name. This will associate the “www.” prefix to your created domain name. For Type, select “A – IPv4 address.” For Alias, select “No,” and input the assigned Elastic IP Address as the value. For Routing Policy, select “Simple.” `

        },
        {
            contentType: "Image",
            content: `01-30-images.png`

        },
        {
            contentType: "Text",
            content: `For the second A Record, leave the Name input empty. This is so that your EC2 instance can be reached when the domain name is entered into the address bar without the prefixed “www.” For Type, Select “A.” For Alias, select “Yes,” and include the A Record that we just created as the Alias Target. Click Create when done. `

        },
        {
            contentType: "Image",
            content: `01-31-images.png`

        },
        {
            contentType: "Text",
            content: `You should now have a total of four record sets associated with the domain name. Entering the domain name into the address bar should now take you to your web application hosted on the Amazon EC2 instance. Give it a few hours if the domain name is not linked to your EC2 instance. Otherwise, you should have successfully deployed your web application on an Amazon EC2 instance, re-directed port 80 to port 3000, and associated a custom domain name with the instance.`
        },
        {
            contentType: "Text",
            content: `You are done. Go, now, to sleep. Or chug actual beers. Or maybe just drink one. Cheers.`
        }

    ],
    url: "deploying-to-ec2-and-shotgunning-beer",
    photoHeader: "/images/shotgunBeerPhotoHeader.jpg"

};




/////////////////////////////////End of Essay Two






let thirdEssay = {
    essayNumber: "03",
    title: "Have some Class with your Beer: An Introduction to Prototype-Based Inheritance in Javascript",
    introduction: "One part ECMAScript 6 class syntax and 2 parts beer.",
    datePosted: "June 16, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `Javascript is a prototype-oriented language.  In short, objects in Javascript can be created as an instance of another object, and the instanced objects inherit properties and methods  from the prototype object. If trying to understand the concepts of prototype and instance from within the context of Javascript is proving to be a little bit difficult—because I know I briefly had some difficulty grasping the concepts at first—take a few moments to consider them in another light.  To get a better sense of prototype and instance in Javascript, strip away the context of Javascript and just concentrate on each word and their corresponding definitions outside of the language. The word prototype denotes a model in which something can be patterned from. An antagonist stealing the prototype for a laser beam, for example, is a familiar science fiction trope. The laser beam prototype serves as a model in which the antagonist can create more laser beams to advance his or her world domination goals.  An instance, on the other, can broadly be thought of as an example of something. In relation to prototype, an instance is an example of the prototype—the additional laser beams the antagonist aims to build and potentially upgrade.`
        },
        {
            contentType: "Text",
            content: `Lend your attention for another minute to the following example that slowly creeps towards Javascript relevance. The intangible concept that is Beer—not what we drink, but the ideal of Beer—can be thought of as, for the sake of simplicity, the prototype in which every beer we have ever consumed is extended from. Again, for the sake of simplicity and without veering too much into a philosophical discussion, all of those Bud Lights and Keystone Ices you have actually consumed can be thought of as instances of the prototype Beer ideal. Take a gander at the Javascript down below as an illustration to this example.`
        },
        {
            contentType: "Image",
            content: `02-00-images.png`

        },
        {
            contentType: "Text",
            content: `What has been constructed in ECMAScript 5 fashion is a prototype for the Beer class. As you can see, I defined the class name, which is Beer, the two properties each instance of the Beer class must have, which are the name and alcoholic properties, and an instance method that each instance of the Beer class will inherently possess, which is the shouldIDrink method.`
        },
        {
            contentType: "Text",
            content: `With the prototype defined, I can now create instances of the Beer class:`
        },
        {
            contentType: "Image",
            content: `02-01-images.png`

        },
        {
            contentType: "Text",
            content: `Up above, I have created three new instances of the Beer class—for a small buzz, of course. Each instance also has access to the shouldIDrink method:`
        },
        {
            contentType: "Image",
            content: `02-02-images.png`
        },
        {
            contentType: "Text",
            content: `Now, creating classes via this prototype syntax has been available in Javascript.  The introduction of the class syntax in ECMAScript 6, though, pretty much accomplishes the same thing as what I did using the prototype syntax above, but it does so in a more pleasant syntax. The class syntax in ECMAScript 6 is simply syntactical sugar, which can be considered revisions to the language for no other substantial purpose than to make writing code a bit more sweeter for the developer.`
        },
        {
            contentType: "Text",
            content: `Now, let us scoop on some of that sweet class syntax:`
        },
        {
            contentType: "Image",
            content: `02-03-images.png`
        },
        {
            contentType: "Text",
            content: `The above example illustrates how to define a class in ECMAScript 6 using the class declaration.  Note that the class syntax does look a little less complicated and much clearer than the first syntax that was introduced. The second way to define a class is by using the class expression syntax:`
        },
        {
            contentType: "Image",
            content: `02-04-images.png`
        },
        {
            contentType: "Text",
            content: `Now, maybe we would like to add properties and methods to the class  object, but we do not want them to be passed down in each instance of the class. We can add static properties and static methods to a class object via the static keyword:`
        },
        {
            contentType: "Image",
            content: `02-05-images.png`
        },
        {
            contentType: "Text",
            content: `The previous illustrations show how the class syntax can be used to create classes in ECMAScript 6, but as I briefly mentioned earlier, the functionality and features really are not all that different than what existed in the language prior to ECMAScript 6. The prototype-based inheritance has not changed, which, according to my understanding, all boils down to a system in Javascript that is based on the construct of the object. Nearly everything in Javascript is an object, and each object has at least another relationship with a parent object—its prototype—or with null, which is the final link in the prototype chain.`
        },
        {
            contentType: "Text",
            content: `It is through the intrinsic behavior of prototype-based inheritance in Javascript that a subclass can be created, which can otherwise be thought of as a class that is a child of another class—its prototype class. This can be accomplished using the extends keyword in ECMAScript 6, which can be used in both class declarations and class expressions:`
        },
        {
            contentType: "Image",
            content: `02-06-images.png`
        },
        {
            contentType: "Text",
            content: `The SixPack class in the example above is a subclass of the Beer class. As an extension of Beer, each instance of the SixPack class is created with the properties—name and alcoholic—it  inherits from Beer, and it as well inherits the shouldIDrink method from Beer. The super keyword, for one, is used to call functions on the parent of a class using object notation: super.functionOnTheParent(). Using the super keyword in the constructor, as it is illustrated in the example above, can all be used to access the properties of the parent class so that they can be inherited by the the instances of the child of the class.`
        },
        {
            contentType: "Text",
            content: `As it might be noted, the SixPack class is not simply just inheriting the properties and methods from the Beer class out of sheer convenience. Rather, there is an actual association between the two classes that make them appropriate prototype and child classes. Keep this in mind when creating subclasses, so as to avoid creating subclasses all willy-nilly.`
        },{
            contentType: "Text",
            content: `And now, after this brief introduction on the prototype-based inheritance in Javascript, I part ways with you. May your coding ventures be accompanied by bounties of beer. Cheers. `
        }
    ],
    url: "class-with-your-beer-intro-to-prototype-based-inheritance",
    photoHeader: "/images/classWithBeerHeader.jpg"

};




/////////////////////////////////End of Essay 3


let fourthEssay = {
    essayNumber: "04",
    title: "Just Give Me a Beer, Please: An Introduction to Big O Notation",
    introduction:  "It's Big O and beer. What's not to love?",
    datePosted: "June 27, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `Big O, from my understanding, is a mathematical notation that, when applied to computer science, is effective at analyzing the efficiency of an algorithm. Specifically, big O analyzes the efficiency of an algorithm based on how it scales in reference to the size of the dataset, or input, that is fed to the algorithm. What is being measured by big O is the time complexity of the algorithm—or, in other words, the time it takes for an algorithm to complete. And generally, the amount of time for an algorithm to complete is based on the number of operations the algorithm needs to perform. So to reiterate, big O can be understood as a notation that represents the time it takes for an algorithm to complete based on the amount of operations it is required to perform. `
        },
        {
            contentType: "Text",
            content: `Okay. That was a big of jargon. Let's let that sink in for a little.`

        },
        {
            contentType: "Text",
            content: `In the meantime, how about I take a quick break. It has been awhile since I enjoyed a beer, and I want one—any beer. I am not picky right now; I could even drink a Shocktop. So I head on over to the local liquor store. I wave to Sam behind the counter, and proceed to the fridges in the back. Since at this point in time I just want a beer, any beer, I am not going to waste my time searching for a particular one. Instead, I decide on getting literally the first beer I see. Now, this rather thoughtless method of deciding which beer to get can actually be expressed in big O notation. The process in which I decide on the first beer that I see can be described in big O notation as O(1). In my current give-me-any-beer-right-now state-of-mind, my thought process of what beer I should get—the algorithm behind my decision—can be analyzed as executing in constant time: no matter the size of the list or array—no matter how wide the selection of beers is at Sam's Liquor—the application of the algorithm that is my give-me-any-beer-right-now state-of-mind will execute at a constant time and return me a beer, which will be the first one that I see. I will not even bother to look at other beers; I simply will get the first beer that I see. `

        },
        {
            contentType: "Image",
            content: `03-00-images.png`

        },
        {
            contentType: "Text",
            content: `As it can be gleaned from the code illustration above and just to reiterate, the process in which I choose a beer at Sam's Liquor in my give-me-any-beer-right-now state-of-mind runs in constant time relative to the input, which is the selection of beer at Sam's.`

        },
        {
            contentType: "Text",
            content: `In most situations, I would be happy with this thought process. It is immediate, I get a beer in my hand as soon as possible, and, hey, who am I to complain? A beloved beer is a beloved beer. I will drink anything if it is offered to me, but in this situation, I am purchasing my own beer, so I think I should be a bit more selective with my choice.`

        },
        {
            contentType: "Text",
            content: `So, I rewind the narrative. I have already entered Sam's and have just waved to him. My mind is reeling as I proceed to the refrigerators in the back. It is a common occurrence: I have no idea which beer to get. So, I decide to look at every beer in all of the fridges. That will help me decide; it usually does. This process of examining each beer in Sam's Liquor can also be described in big O notation as well. In fact, it is of O(n), where n is the size of the input—which in this scenario is the entire selection of beer at Sam's Liquor. My examination process runs in linear time, so the amount of time it takes me to examine the entire array of beers is relative to the size of the list. If there are 100 beers at Sam's, and I give each beer a considerate and thoughtful minute to mull it over, it would take me 100 minutes to complete the examination process. If there were 50 different beers, it would take me 50 minutes. If there were 10 different beers, it would take me 10 minutes, and so on.`

        },
        {
            contentType: "Image",
            content: `03-01-images.png`

        },
        {
            contentType: "Text",
            content: `The key thing to remember is that the time complexity in an O(n) algorithm will grow linearly, and it will also grow in proportion to the size of the input.`

        },
        {
            contentType: "Text",
            content: `Let us now include some more relevant application of these previous examples. Big O notation  in computer science, as I introduced earlier, can be used to represent the time complexity of an algorithm, which can be understood as the amount of time, based on the amount of operations, it takes for an algorithm to complete—and completion is designated as the moment in which a search algorithm, for example, finds the search term in a list or array, or when a search algorithm completes its search and it yields no matches. To add some jargon to the pile, the terms worst case, best case, and average case are used to express the time complexity of the application of an algorithm in these various scenarios. It might be self-explanatory what each case refers to, but to get a little context, the big O notation for the best case an algorithm, for example, would refer to the time complexity of the algorithm in ideal conditions. In a linear search, where each item in the list is looked at in turn, the best case would be represented as O(1), and it would occur when the search term is the very first item in the list.`

        },
        {
            contentType: "Text",
            content: `Now, let us rewind the narrative again. This time, I know what beer I want: I want a six pack of Calm Before The Storm, which is brewed by Ballast Point. I just waved to Sam, and am proceeding to the fridges that store the beer. I know where the Calm Before The Storm six pack is. It is right in the middle where—and before I finish that thought, I realize that the entire selection of beers have been rearranged. I yell to Sam, “Hey, what gives? Why'd you rearrange everything?” Sam is tending to a customer, so he does not mind me. Maybe an impatient version of me grumbles, and I then proceed to search for the beer using a good ol' fashioned linear search, where I start at one end and examine each item in the array—each beer in Sam's—one by one and in order until I either find the search term—the search beer—or if I reach the end and do not find the search term.`

        },
        {
            contentType: "Image",
            content: `03-02-images.png`

        },
        {
            contentType: "Text",
            content: `Using a linear search, the best-case of the algorithm would be in O(1), and that would occur if the beer is the very first one that I examined—and found! The worst-case, on the other hand, would occur if Calm Before The Storm is out of stock or if it is at the very bottom of the last fridge: in both cases, I would have to search through every item in the array of beers, and the time complexity for this scenario can be expressed in big O notation with O(n).`

        },
        {
            contentType: "Text",
            content: `But hold up. Let's rewind a bit again. There should be a less tedious way for me to search for the beer.`

        },
        {
            contentType: "Text",
            content: `Now, I just yelled at Sam in reference to the beer selection being rearranged. He yells back at me this time: “I put it in alphabetical order. By Brewery.  No big deal.” I agree with him and tell him it should make my searches easier. Instead of doing a linear search on the entire selection, since it would be time-consuming and pointless to go one by one, I instead divide the entire wall of fridges in half and ignore the latter half, the ones containing beers from breweries that begin with a letter from N to Z. Immediately, the list of beers gets cut in half. I then do the same operation with the first half of the list, which contains beers from breweries with a beginning letter between A and M: the letters F through M get discarded , and now I only have A through E. I make subsequent divisions in half until I am left with beers brewed by Ballast Point and finally I find Calm Before The Storm.`

        },
        {
            contentType: "Image",
            content: `03-03-images.png`

        },
        {
            contentType: "Text",
            content: `This example of a binary search works by dividing a list and  comparing the halfway point with the search term. The irrelevant half of the list subsequently gets discarded. The same operation is then performed again on the remaining list until either the search term is found or when all possible searches have been exhausted, indicating that the search term is not in the list.`

        },
        {
            contentType: "Text",
            content: `In a binary search, the average case can be expressed as O(log n). Based on my own research and understanding, O(log n) basically means that time increases linearly as  n—or, the input—grows exponentially. For example, if it took me 1 minute to search through a list containing 10 beers using an O(log n) algorithm like a binary search, it would take me 2 minutes to search through a list containing 100 beers and 3 minutes for a list of 1000 beers. `

        },
        {
            contentType: "Text",
            content: `This time, I grab the six pack of Calm Before The Storm, pay, and leave Sam's Liquor. I will put big O notation to rest for now. Beer calls. Cheers. Until next time.`

        }
    ],
    url: "beer-me-please-an-intro-to-big-o",
    photoHeader: "/images/bigOHeader.jpg"

};




/////////////////////////////////////////// End of Essay 4

let fifthEssay = {
    essayNumber: "05",
    title: "This Beer: An Introductory Tour of the this Keyword in Javascript",
    introduction:  "Why not read about this?",
    datePosted: "July 10, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `In my early Javascript days, the this keyword somehow made sense to me. I might not have had been able to describe its behavior, function, or purpose, but I somehow made it work to my expectations, and that was partly because I was understanding the this keyword as I understood the word in the English language: as a pronoun or adjective that refers to something present or within proximity.`

        },
        {
            contentType: "Text",
            content: `“This beer is mine.” `

        },
        {
            contentType: "Text",
            content: `“Is this yours?”`

        },
        {
            contentType: "Text",
            content: `“Yes. I said, 'This beer is mine.'”`

        },
        {
            contentType: "Text",
            content: `The beer in reference is here, present, within reach, and its the beer, presumably among others, that is being actively focused on—the beer in subject of the context of the terse conversation up above. This beer. Not that one.`

        },

        {
            contentType: "Text",
            content: `But this wasn't referring to beer during those early Javascript days. Rather, as I typed $(this).css(“background-color”, “blue”) on a Saturday night, the this I had in mind was the specific div I was setting to the color blue whenever it was clicked.`

        },

        {
            contentType: "Text",
            content: `That's how I understood the this keyword back then: it was used to reference a context, which often was the element I was targeting in jQuery. And I carried this notion with me for awhile: that the this keyword simply referenced some present context. And that wasn't entirely accurate, nor was it entirely inaccurate.`

        },

        {
            contentType: "Text",
            content: `This—or, rather, this—as I've come to understand it, refers to the execution context of a function. More specifically, it refers to the execution context of a function at its call site—the location where a function gets invoked.`

        },
        {
            contentType: "Image",
            content: `04-00-images.png`

        },
        {
            contentType: "Text",
            content: `To break down the above example, the call site of whatsThis() at line 7 is in the global scope and the function is being invoked via a direct reference and without any sort of bound execution context. In its current circumstances at the execution of whatsThis, the this keyword in the example will default to undefined, and that is what will be logged to the console. That's what the this keyword defaults to when there isn't some sort of implicit or explicit binding, which will be discussed shortly. If strict mode wasn't enabled, though, what would have been logged to the console would be the Global object, since I was running this code in Node. If I had ran it in the browser, it would have defaulted to the Window object. So to sum it up, when at the call site there is just a reference to the invoked function, as it is in the example above, the this keyword will default to undefined in strict mode or the Window  or Global object in the browser and Node respectively. `

        },
        {
            contentType: "Image",
            content: `04-01-images.png`

        },

        {
            contentType: "Text",
            content: `In this example, though, the call site is a bit different. Yes, it is still located on the global scope, but there is now an object property reference at the call site on line 13. The iceCooler object on line 7 has two properties: it has the beer property with the string value of “beer,” and it has a howAboutThis property that is referencing the whatsThis function on line 3. To hark back to the earlier definition of the this keyword—that it refers to the execution context of a function at its call site—the whatsThis function on line 3 is being executed via an object property reference on line 13, and so the execution context of the whatsThis function at that particular call site is the iceCooler object. Which is why the contents of the object, or what is contained in its block scope—the code between the curly braces—will be logged to the console.`

        },
        {
            contentType: "Image",
            content: `04-02-images.png`

        },
        {
            contentType: "Text",
            content: `It is also why there is no beer when the whatsThis function is again called on line 20: at that specific call site, the whatsThis function is being executed via the object property reference on the fridge object, and there's only milk up in there. `

        },
        {
            contentType: "Text",
            content: `This demonstration is referred to as implicitly binding this. This behavior can be summed up as the following: if there is an object property reference at the call site of a function, the object becomes the execution context of the function and so it becomes the this keyword. This example also demonstrates  how nearly everything in Javascript is actually a reference to an object or a function. Muse on that for awhile. It'll be discussed in a future post.`

        },
        {
            contentType: "Text",
            content: `Besides the implicit and default behavior of the this keyword, there are two nearly identical methods that allow the developer to have more control in setting this.`

        },
        {
            contentType: "Image",
            content: `04-03-images.png`

        },
        {
            contentType: "Text",
            content: `The call and apply methods, as demonstrated in the example above, are used to explicitly bind the this keyword to an object, and it'll be bound to the first argument of the method, which is referred to as the this argument. Note that call and apply are called on the function. Let's now breakdown the call site.`

        },
        {
            contentType: "Text",
            content: `On line 15, the whatsThis function is being called via a simple, direct reference, and if there was no form of explicit binding, the this of the whatsThis function at line 15 would default to undefined because there is no form of implicit binding in place—that is, the whatsThis function is not being called via an object property reference, as it was demonstrated in earlier examples. But there are explicit bindings. Call and apply are, in a sense, taking over the call site, and they are explicitly setting the execution context at their respective call sites with the this object argument. Which is why when whatsThis is being called at the line 15 and 16 call sites, this is logged as the keg object. The following argument, or arguments, that call and apply can take are the arguments for the function being invoked, which in this case is the “keg” and [“keg”] arguments for the thisIs parameter for the whatsThis function. Here is where the distinction is for call and apply. Both methods have exactly the same behavior in terms of explicitly binding this to the first argument, which, again, is referred to as the this argument, but call allows you to pass in the arguments of the function one by one, and apply allows you to pass in an array with the arguments inside. Besides this behavior with passing in the invoked functions arguments, call and apply are the same in how they explicitly bind this.`

        },
        {
            contentType: "Text",
            content: `Lastly, there's the bind method, which is a tool that binds the this keyword to a function.`

        },
        {
            contentType: "Image",
            content: `04-04-images.png`

        },
        {
            contentType: "Text",
            content: `The bind method is used to create a new function that has its this bound to whatever object is given to it. On line 12, the variable boundWhatsThis is being declared to the newly bound whatsThis function. When boundWhatsThis is called, as it is on lines 16 and 20, it'll call the whatsThis function with its this set to the keg object. This is an example of hard binding: specifically, the this keyword in the whatsThis function is being hard bound to the keg object, and so its execution context is thereby being forced to that object, which can be accessed via the created boundWhatsThis function.`

        },
        {
            contentType: "Text",
            content: `Here, the introductory tour of the this keyword in Javascript concludes. Cheers.`

        }
    ],
    url: "this-beer-an-intro-to-this-in-javascript",
    photoHeader: "/images/thisKeywordHeader.jpg"

};


//////////////////////////////////////////////////End of Essay 5



let sixthEssay = {
    essayNumber: "06",
    title: "Turning On The Light: An Exploration of Bidirectional Data-Binding and Unidirectional Data Flow",
    introduction:  "The best way to understand something you don't know is by tackling it head on and dissecting it. Read about how I became more intimate with React, Angular, and software development in general.",
    datePosted: "July 29, 2016",
    textBody: [
        {
            contentType: "Text",
            content: `A few weeks ago now I began my foray into React after settling in comfortably with Angular. Although I hadn't mastered Angular, I was pretty comfortable maneuvering my way in an Angular front-end. It was because of that comfort that I itched to seek other technologies. Which wasn't motivated by boredom or dissatisfaction with Angular. Not in the very least. But because I believe it requires new experiences and new point-of-views to really understand a familiar state or perspective: being open-minded and reaching for new experiences push you to confront and challenge yourself and what you know, thereby strengthening who you are and what you know, or exposing it for what it is so that you can amend or rebuild if you have to.`
        },

        {
            contentType: "Text",
            content:`What I realized after converting the front-end in a MEAN stack web application into a React and Redux front-end was that although I was able to maneuver in an Angular front-end, I lacked the knowledge on why and how I should best maneuver. My application-building process prior to that point had been sort of like building a structure in a pitch dark room. I was able to make my way from one end of the room to another where, say, materials were, and I was able to  do so, at first, through trial and error, through initially bumping and hitting other stationary objects or furniture in the room masked by darkness. I was able to construct something in the dark room with the materials, after feeling them, making out the shape and size and estimating the weight of them, and ultimately familiarizing myself with them, all the while still, really, in the dark.  Throughout the process I would maneuver to the materials on one end of the room through my tried path, recognize which of the materials felt right for the task at hand, and construct. Yes, I was able to maneuver and build, but there lacked a degree of insight, awareness, and clear orientation.`
        },

        {
            contentType: "Text",
            content:`Ultimately, I was successful in converting my Angular front-end to a React and Redux front-end. But after I did, I still felt in the dark to the real how's and why's of the project. And when I tried to convey my experiences with the Angular-to-React project, I was in a position of trying to explain how I  accomplished something in the dark: I could make some effort to providing a vague description, but it would lack the depth and understanding of knowing one of the most crucial things: knowing where in the hell I was at. `
        },
        {
            contentType: "Text",
            content:`It was following my Angular-to-React project that I began to write this post and turn on the light to what I have found to be a crucial aspect of web development to understand: how an application manages the updating of data and state, particularly through efficient and accurate responses to user interactions. In Angular's case, it is through bidirectional data-binding. In React paired with a Redux architecture, it is through a unidirectional data flow. These two concepts deal with how an application responds to user interactions with application state and data, and how to best update so that not only the internal state of the application reflects the user-intended changes, but also the view through an efficient re-rendering.`
        },
        {
            contentType: "Divider"
        },
        {
            contentType: "SectionHeader",
            content: "Model-View-Controller"
        },
        {
            contentType: "Text",
            content:`Before I tackle bidirectional data-binding and unidirectional data flow, I found it helpful to understand the Model-View-Controller architectural pattern that Angular's data-binding  can be considered an extension from and the React-encouraged unidirectional data flow a departure from. Please keep in mind that the next few paragraphs are of my interpretation of the MVC pattern outside of the web development scope, which will lead into its application in web development and the aforementioned topics/technologies. Here's a quick primer on my interpretation of it: the Model-View-Controller (MVC) architectural pattern is concerned with user interfaces and the relationship between user interaction with the software.`
        },
        {
            contentType: "Text",
            content:"My research led me to discover that the Model-View-Controller pattern originated outside of web application development in desktop graphical user interfaces, and I've traced an early discussion on the pattern to a late 1970's text written by Trygve Reenskaug, which can be found "
        },
        {
            contentType: "Link",
            link: "http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html",
            content: " here."
        },
        {
            contentType: "TextAfterLink",
            content: "In it Reenskaug writes that the “essential purpose of MVC is to bridge the gap between the human user's mental model and the digital model that exists in the computer.” What can be gleaned from this quote is that the purpose behind the MVC pattern is to facilitate ease of interaction with software. The “human user's mental model” refers to the internalized assumptions that a user has before engaging with software. It is the model he or she forms and that will lead his interaction with the software, and it could prove to be accurate or entirely inaccurate from the actual conceptual model of the software. What should be aimed for, from what I've read, is to design software that best reflects the user's mental model; that'll ultimately create the best user experience."
        },
        {
            contentType: "Text",
            content: "The MVC pattern can also be interpreted as a solution to a software design concern of how best to facilitate the intended information acquisition or manipulation of a more or less intangible source: the digital material that is data. Which can be interpreted from the following question, which is posed by Reenskaug"
        },
        {
            contentType: "Link",
            content: "here",
            link: "http://heim.ifi.uio.no/~trygver/2003/javazone-jaoo/MVC_pattern.pdf"
        },
        {
            contentType: "TextAfterLink",
            content: `: “How can we design a system so that the user sees a reflection of his mental model in the system without any of the details that happen to be of no interest to him.” My interpretation of the quote requires us to consider something. While the user's mental model refers to the assumed steps he will take to interact with the software, I find it important to understand why a user, in the case of web applications, will often interact with software in the first place. It is my belief, and I mention this without any superlatives, that a user interacts with software to interact with data, or information; and it is software, as well as hardware, that facilitates that interaction. So really, the MVC pattern aims to “bridge the gap” between how a user assumes he will interact with data through a user interface, which can be software and hardware, and how that actual interaction is facilitated by the software and hardware. And that best can be achieved, according to my interpretation of the MVC pattern, through a separation of concerns: the controller component accepts as input the user's intended interactions with the data; the model component manages the data in the software and receives commands or directions from the controller on how update or manipulate the data; and the view component receives the outputted data from the model to render and re-render to reflect the user's intended interactions. What stands out to me is that user intended interactions are crucial to understanding and implementing an MVC pattern implementation; the pattern implementation should not only accurately responds to user intentions, but provide an environment that facilitates accepting user-intended interactions.`
        },
        {
            contentType: "Image",
            content: `05-00-images.png`

        },
        {
            contentType: "Text",
            content:`In the context of web development, the MVC pattern can be used to design how an application conveys data and accurately updates how the data is rendered to the user and stored in the model. To extend the Reenskaug quotes, that the MVC pattern bridges the user mental model with the digital model, we can draw a fair conclusion that a normal user of any web application would expect that the application would respond quickly, accurately, and efficiently to his intended interactions with it—which ultimately, I believe, is with the data and application state, which refers to the data available at any given moment at runtime of an application. This can be each task in a To-Do application, clothing on an e-commerce application, posts or photos of friends in a social network application; whatever it is, though, it ultimately is data, or information, that is rendered to a view for the user to acquire and/or interact with. So when taken a bit further, the MVC pattern can be applied in web development as a way to design a system that is able to quickly, accurately, and efficiently respond to a user's interaction with the data and application state. Hence, Angular's use of two-way data-binding.`
        },
        {
            contentType: "SectionHeader",
            content: "Bidirectional Data-Binding and Angular"
        },
        {
            contentType: "Text",
            content:`Without entering the debate on whether Angular is an MVC framework or MVVM framework, I'd like analyze how Angular's two-way data-binding targets one of the concerns that the MVC pattern addresses. With Reenskaug in mind, two-way data-binding addresses the likely user expectations of interacting with a responsive web application by binding a more direct relationship between view-rendered data and the data in the model. As I discussed earlier, it is a fair assumption to design a web application around a user mental model that is based on an application responding quickly, efficiently, and accurately to the user's interactions with the state. This translates to expectations of instant updates on the view that reflect user-intended manipulations of the state. Angular achieves this through the bound relationship between the data in the model and the data that is rendered in the view, so that when there is an update to the view on, for example, a digital user interface, such as when a user types in an input field, the updates will be registered directly to the appropriate state. The same, too, applies when there are changes to the model data, such as, for example, from some sort of an API call:  when the response is received and as soon as the state is updated by the controller, the bound relationship between the model and view will cause an instant update in the rendered data in the view. `
        },
        {
            contentType: "Image",
            content: `05-01-images.JPG`

        },
        {
            contentType: "Text",
            content:`While this direct and instantaneous relationship between the view-rendered data and the model data is effective at providing responsive behavior to user interactions in a web application, there are some performance hindrances to the two-way data-binding design that should be considered. I discovered that performance could potentially drop in an application as it grows and the number of watched variables increase, especially in older browsers. The watched variables are the $scope variables that have been “marked” to be watched, and they are monitored through what is referred to as dirty checking, which is simply the process of checking for changes in the watchers. During a digest cycle, which itself can be simplified to a loop, Angular scans each watcher for any changes since the previous cycle. If even the value of one watched variable is picked up in a cycle, Angular will perform another loop on all of the watched variables to scan for any potential changes that might have occurred. Angular will perform this loop until either all of the watched variables are picked up with no changes, or if the loop reaches 10 cycles. This is how two-way data-binding is effected in Angular. The potential performance problems might not seem like an issue in smaller-scale applications with a more manageable amount of watchers. But as a web application scales up, though, and becomes a beast of beautiful complexity, each cycle could become drastically longer. Since almost any event can trigger a digest cycle, potential performance hindrances can definitely become an issue. `
        },
        {
            contentType: "Text",
            content:`With this consideration in mind, we can acknowledge that as an application grows and becomes more complex, two-way data-binding can lead to performance issues that ultimately affect arguably the most important part of an application: the view. The view is what the user sees and interacts with; it is likely what the user bases the majority of his or her impression on. So when a complex application has a ton of  watchers, the performance hit of having the go through them and potentially go through them again and again will likely hit where the user experience is based on. This will lead to potential unresponsiveness in the view and the user interfaces, which really equates to an experience that doesn't align with the user mental model. So while two-way data-binding in Angular can successfully address in more manageable applications an MVC pattern concern of providing a responsive and accurate experience for the user, Angular coincidentally falters as the project grows in that particular issue it works well with in more manageable projects. `
        },
        {
            contentType: "Text",
            content:`Another shortcoming of bidirectional data-binding in general, which in hindsight I can now apply to understand some of my previous frustrations with Angular, is the issue of managing shared state between models. Models that hold data and state can and will often be stored on $scope; which itself is an object that holds the watched variables to effect the bidirectional data-binding in Angular. Each new controller in Angular essentially initializes a new $scope object to add to the $scope tree structure that reaches all the way up to $rootScope. There will very likely come a time as your application grows when data or state in one $scope object is needed by another $scope object: essentially,  one model becomes dependent on another model. But as your application continues to grow, that important data stored in one $scope object isn't needed by just another $scope object, but maybe three, or four others. Connecting how the state gets from here to there and there and so on will undoubtedly become a frustrating mess, and before you know it, your application will have matured into one without a real single source of truth, thereby resulting in the likelihood of having an unstable application state. Oh, my. And just yesterday your baby was so manageable.`
        },
        {
            contentType: "SectionHeader",
            content: "Unidirectional Data Flow with Redux-Paired React"
        },
        {
            contentType: "Text",
            content:`Come React to address some of the issues of two-way data-binding with its encouragement of a one-way data flow. While React itself is just a view framework for your application, the Flux and Redux architectures are where the unidirectional data flow originate from. The Redux architecture, which I will primarily focus on going forward and will introduce right now, implements a unidirectional data flow by, first, storing all of the application state in one place, the store. Data flows down from the store into a specific type of React component called a container component. Components, by the way, are the building blocks that the views and user interfaces are built with. The container components then trickle down the data appropriately to its children presentation components that need it. When a user interacts with the application,  it will be through a user interface on a component. This will trigger the dispatch of an action, which is essentially an object with at least the property of type. The value for the type property will be a string representing what type of event triggered the dispatch of the action. The action can as well have additional properties that store data that is used to, for example, add or update the application state. The action, along with the current state, will be inputted to all of the reducers, which are pure functions: pure functions produce no side-effects nor are they dependent on some sort of external state, so they will always return the same output given the same input. A reducer will check the type of each action, and if it doesn't match, it will return the the state untouched and proceed to the next reducer; otherwise, if the action type does match, the reducer will do its business with the state and any data attached to the action, and return an updated state. An important thing to understand, though, is that the state that is returned by the reducer isn't a mutation of the state that is inputted to it; a copy of the inputted state is made in the reducer, which is revised upon according to the action, and returned. The store is then updated with the new state, which lastly flows down to the container components and to their appropriate children presentation components, thereby updating the view.`
        },
        {
            contentType: "Image",
            content: `05-02-images.png`

        },
        {
            contentType: "Text",
            content:`This Redux data-flow is strictly unidirectional, and being so, it can address some of the shortcomings of the bidirectional data-binding in Angular. While bidirectional data-binding in Angular essentially subscribes to changes on the view and model to update each other accordingly, which can cause potential issues in performance and with state management as the application grows, state updates in Redux are made in one place, which then trickle down to the components that need the updates. This structure assures that the entire state of the application exists at a single source of truth, which is the Redux store. This means that the potential complication of models being dependent on other models for state in Angular are non-existent in a Redux application. In addition, any potential performance hindrances caused by Angular's dirty checking are, as well, non-existent. `
        },
        {
            contentType: "Text",
            content:`The store in Redux is also immutable, so this trait paired with the unidirectional data flow makes understanding your application and debugging it simpler than in a bidirectional data-binding application of large scope. As it was mentioned earlier, bidirectional data-binding could lead to a mess of shared state between models; issues could sprout where mutating shared state in one part of the application could lead to unintentional impacts in another part of the application. In Redux, any intention to change the state goes through a reducer, and only the appropriate reducer will output the new state based on the action type. As a result, there is a clear understanding of how data moves through the entire application, and the unidirectional data flow makes it simple to trace where what is happening where so that debugging can quickly isolate where attention needs to be applied. The immutable aspect of the store adds to the ease and clarity because it assures that any updates to the state are ultimately happening in a reducer; Which, again, are pure functions that accept the current state and action, and either outputs untouched state or new, updated state that hasn't been mutated.`
        },
        {
            contentType: "Text",
            content:`All o' this unidirectional data flow that is encouraged in React and implemented by Redux translates to quick, accurate, and efficient responses to  user actions and data changes. View updates are calculated and performed as efficiently as possible in React, so what you get with React and Redux is a front-end that scales better, has a clearer and more understandable data flow, and is easier to debug than an Angular front-end with its bidirectional data-binding. React paired with Redux is also, in my opinion, much more enjoyable to write because it could be written in pure Javascript, although I do enjoy writing JSX. React and Redux also take a functional programming approach, which I have loved so far, and will be discussing in coming posts. `
        },
        {
            contentType: "Text",
            content: `So, that's what I meant some time ago when I first converted an Angular front-end to a React and Redux front-end. That's turning on the light. Thank you if you reached the end of this lengthy post. And if you spotted any inaccuracies in my interpretations and understandings, I encourage you, reader, to correct me down below. Until I switch on another light, enjoy a beer or four. Cheers.`
        }

    ],
    url: "turning-on-light-data-binding-vs-data-flow",
    photoHeader: "/images/bulbForTurningOnLightPiece.jpg"
};

////////////////////////////////End of Sixth

let seventhEssay = {
    essayNumber: "07",
    title: "That Drink Brewed From Malted Barley: An Introduction to Using Abstraction in Your Javascript",
    introduction:  "Abstraction is what allows me to refer to beer without the need of having to understand the complexity of that drink brewed from malted barley. Read about how abstraction applies to Javascript.",
    datePosted: "August 16, 2016",
    textBody: [

        {
            contentType: "Text",
            content:`It’s important to be self-aware, both as a developer and as a human being. It helps you understand how you got from there to here, which is crucial to your own growth: knowing how you lead yourself to this point in time as a developer, or just as a human, will help you determine what you need to do so you can continue to improve. And in an industry that doesn’t stay still for long, it is vital to continue growing alongside the restless beast as it perpetually evolves.`
        },
        {
            contentType: "Text",
            content:`After taking some time to understand my growth, I’ve noticed in my own code a shift towards a functional style of programming that is leaps and bounds more maintainable and readable than my early imperative style of coding. While the imperative style that is characteristic of my early Javascript days did help familiarize me with Javascript and programming in general, it really served as a sort of training wheels that I would ultimately ditch once as I was able to code with confidence and self-awareness.`
        },
        {
            contentType: "Text",
            content:`As I look back to those earlier days, I’ve also noticed a lack of abstraction in my imperative code. It was just something that I wasn’t familiar with during those times when I wrote my code in a sequence of instructions.`
        },
        {
            contentType: "Text",
            content:`But abstraction is an incredibly important technique in computer science. It can even be argued that we wouldn’t be at this point in technological progress, nor would we be able to advance further, without abstraction.`
        },
        {
            contentType: "Text",
            content:`So what follows are demonstrations of how abstraction can be applied to your own Javascript, as well as how functional composition can be created, which I’ve come to understand as the product of combining abstractions in a functional style of programming.  `
        },
        {
            contentType: "SectionHeader",
            content: "Abstraction"
        },
        {
            contentType: "Text",
            content:`I understand abstraction in computer science as taking complexity and generalizing it, which thereby simplifies it. Abstraction outside of computer science is knowing what beer is without having to know what beer really is: which is a beverage brewed from malted barley, some hops, and some yeast, among other ingredients for individuality and character. Beer serves as an abstraction for this beverage, so we can better interact with and understand beer without having to really interact with and understand all the complexity that makes beer. `
        },
        {
            contentType: "Text",
            content:`It is through combining abstractions that we can understand composition. Abstractions can be composed into further abstractions, so that we can understand what a six pack is without also having to concentrate on what a six pack really is: six glass bottles that each hold 12 ounces of a beverage brewed from malted barley, hops, yeast, and other ingredients, which are held in the six pockets of a cardboard holder. And this is a pretty shallow analysis of the abstraction levels of a six pack. It can be taken deeper into the cardboard holder, the glass bottles, and etcetera. But what I’d like to reiterate is that composition is combining abstractions and layering them to create further abstractions, which make life, and coding, more manageable. `
        },
        {
            contentType: "Text",
            content:`As we will see shortly, abstraction and functional composition in Javascript, or at least in this functional style of Javascript that I am exploring, really refers to functions. Functions can be created to act as abstractions for complex instructions and processes, and combining them through functional composition ultimately can help in creating more maintainable and readable code.`
        },
        {
            contentType: "Text",
            content:`But first let’s look at a more imperative style of writing Javascript, which is characteristic of my early code, and see how I used to figure out how many beers I would have in my fridge at any given time. `
        },
        {
            contentType: "SectionHeader",
            content: "An Imperative Style of Programming"
        },
        {
            contentType: "Text",
            content:`Right now, let’s say that I have two six packs of Fat Tire and Budweiser that each contain six empty beer bottles. Those six packs are done, but they’re still in my fridge until I finish every six pack and empty everything altogether. I have an additional three six packs in the fridge: Alley Cat Amber Ale has three unopened beers, Anchor Steam has four unopened beers, and Sculpin has one unopened beer. All of this data is represented below in an array of six objects with properties for beer and brewery, and a beers property that has a value of an array with items of either true or false,  depending on whether or not the beer is unopened or consumed.`
        },
        {
            contentType: "Image",
            content: `06-00-images.png`

        },
        {
            contentType: "Text",
            content:`If I wanted to figure out which six packs still had unopened beers, I would have maybe looped through each six pack and checked them:`
        },
        {
            contentType: "Image",
            content: `06-01-images.png`

        },
        {
            contentType: "Text",
            content:`I would declare an empty array called sixPacksWithBeers to hold any six pack objects that would have unopened beers. Then I would follow that declaration with a for loop cycling through every six pack in the sixPacksInFridge array. I would then nest another for loop to cycle through each beers array, only pushing the six pack object into the sixPacksWithBeers array if there is at least one unopened beer in it. With a concluding log to the console, I would know which six packs had unopened beers.`
        },
        {
            contentType: "Text",
            content:`But then I might want to know how many unopened beers remained altogether. I might add some more code in this little program to just count the beers in the objects in the sixPacksWithBeers array:`
        },
        {
            contentType: "Image",
            content: `06-02-images.png`

        },
        {
            contentType: "Text",
            content:`I would declare another variable named totalBeersLeft with an initial value of  0. I would then loop through the sixPackWithBeers array, nest another loop within it to cycle through the beers property in the six pack objects, and then increase the totalBeersLeft variable by 1 if I find a beer. Lastly, I would log to the console how many beers I had left altogether.`
        },
        {
            contentType: "Text",
            content:`This entire program could be represented in the following file:`
        },
        {
            contentType: "Image",
            content: `06-03-images.png`

        },
        {
            contentType: "SectionHeader",
            content: "Concerns with the Imperative Style"
        },
        {
            contentType: "Text",
            content:`One of my main concerns with this program is that the nested for loops can be difficult to read. The variable names aren’t confusing or misleading, so they do provide some context as to what is happening, but all the code used to construct the nested for loops really muddles the context. Some might argue that the longer, more descriptive variable names sort of lose their clarity in the midst of the for loop code. `
        },
        {
            contentType: "Text",
            content:`The other main concerns I have with this program is that the imperative style it is written in mutates state and the quality of the code suffers from nearly no reusability. These concerns might not seem like much in such a simple program like this, but an imperative style of programming could cause issues in a more complex program: mutating state could affect unintended areas of your program, and the lack of reusable code will often lead to unnecessary repetition of code. This all translates to time wasted either debugging or repeating code.`
        },
        {
            contentType: "Text",
            content:`So while this program will get the job done, the imperative style it is written in ultimately detracts heavily from the quality of the code, and I especially can’t, without tweaking, take this program and use it in another program that, maybe, involved also counting the thirty packs, forties, tall cans, and mini-kegs in my fridge.`
        },
        {
            contentType: "Text",
            content:`What we can do, though, is refractor this code in a more functional style, keeping in mind the technique of abstraction.`
        },
        {
            contentType: "SectionHeader",
            content: "Abstracting the Complexity"
        },
        {
            contentType: "Text",
            content:`For this next example, I can create a function that abstracts the process of identifying which six pack objects contain unopened beers, much like I did in the first imperative example.`
        },
        {
            contentType: "Image",
            content: `06-04-images.png`

        },
        {
            contentType: "Text",
            content:`I declare a function called filterIrrelevantSixPacks that takes one argument, which is an array of six pack objects. I then return the results of calling the filter method on the array with a callback that searches through the beers property for a value of true.`
        },
        {
            contentType: "Text",
            content:`Let’s take it down a level and see what is being abstracted through this much more concise code.`
        },
        {
            contentType: "Text",
            content:`First, the filter method will be called on the input that this function receives. Filter is a method that is called on an array and returns a new array with the elements from the original array that pass the test implemented by the callback.  In this case, if the beers property in a six pack object includes at least one beer, the beer object will pass the test and it will be filtered into the new array. `
        },
        {
            contentType: "Text",
            content:`Let’s now take it a level deeper.`
        },   {
            contentType: "Text",
            content:`What really is happening with the filter method is a loop through each item in an array. A callback is then applied to each item, and if it passes, the item is then pushed into a new array. In my function, I use the includes method for the test criterion. The includes method will also loop through an array to determine if the search element is found in it, returning true or false if it is found or not. `
        },
        {
            contentType: "Text",
            content:`You might have caught on by now, but this function is pretty similar to what is happening in my first nested loop example earlier. In both cases, there is an outer loop over the six pack array, and there is also an inner loop on the beers property within each six pack object. In both cases, the object is filtered into a new array if a beer is found to be unopened in the six pack. The obvious difference, though, is that the  filterIrrelevantSixPacks function is much, much more readable because the complex processes that is happening behind the scenes are abstracted into the methods filter and includes. `
        },
        {
            contentType: "Text",
            content:`Let’s look at the second function:`
        },
        {
            contentType: "Image",
            content: `06-05-images.png`

        },
        {
            contentType: "Text",
            content:`The countRemainingBeers function takes an array of six pack objects as input. Reduce is then called on the six pack array, which ultimately adds up the number of unopened beers in the beers property of each six pack object.`
        },
        {
            contentType: "Text",
            content:`Let’s again understand what is happening a level deeper.`
        },
        {
            contentType: "Text",
            content:`The reduce method is performed on arrays, and it applies a function to each item or value in the array to ultimately reduce the array into a single value. In this example, the function that aids the reduction is only concerned with the beers property of each six pack object. The function filters out only the unopened beers into a new array and calls the length method on it to calculate how many unopened beers are in the six pack, which is added to the number of beers in the subsequent six packs, ultimately returning the total number of beers in the array passed to the countRemainingBeers function. `
        },
        {
            contentType: "Text",
            content:`And now one more level deeper.`
        },
        {
            contentType: "Text",
            content:`The reduce method will begin an outer loop on each item in the array that is passed to the countRemainingBeers function. An inner loop is then performed on the beers property with the filter method. The value returned by the length method on this filtered array then serves as counter for the amount of unopened beers in each six pack, which is added to with each iteration of the reduce loop. Lastly, this number is returned, serving as the reduction of the entire array into a single value. `
        },
        {
            contentType: "Text",
            content:`This function, too, acts pretty similarly to the nested for loops in the second example earlier in the imperative style program. But this code, like the first example function, is much more readable and it is also reusable.`
        },
        {
            contentType: "Text",
            content:`Further, both of these functions adhere to some principles of functional programming. `
        },
        {
            contentType: "SectionHeader",
            content: "Some Principles of Functional Programming"
        },
        {
            contentType: "Text",
            content:`Both functions do not mutate state at all: they just accept input and produce output in a way that is characteristic of a pure function. First, pure functions produce no side effects, which is when a function somehow interacts with something outside of it, such as calling an external function or mutating state. Second, a pure function does not mutate the input that is passed to it, and it will always output a mapped value that corresponds with the input that is passed to it. This means that a pure function will always produce the same output given the same input. `
        },
        {
            contentType: "Text",
            content:`Another functional programming characteristic of this code is the use of higher-order functions. The filter and reduce methods are considered higher-order functions, which are functions that can either receive other functions as input or return functions as output. `
        },
        {
            contentType: "Text",
            content:`The obvious advantages of this functional style of code are readability and reusability. Each function can be read and understood, and each function can be copied into other programs because they don’t have any dependencies. In addition, this code will likely cause less problems down the line, as state does not get mutated. And if there ever was an issue, debugging is isolated to just revising a function, instead of having to tamper with state-mutating code and worrying about where else that code is connected to in your program. `
        },
        {
            contentType: "Text",
            content:`Lastly, I know these examples are not the most efficient ways of counting the beers in each object in the array. In fact, it is a bit redundant. What I aimed to demonstrate, though, are the techniques of abstraction and composition in computer science, so keep this in mind through this demonstration of functional composition. `
        },
        {
            contentType: "SectionHeader",
            content: "Functional Composition"
        },
        {
            contentType: "Text",
            content:`As I mentioned earlier, functional composition is combining functions into another function. This serves the purpose of further abstracting away from the complexity below, adding more readability and cleanliness in your program. `
        },
        {
            contentType: "Text",
            content:`So, let’s say that I didn’t want to call two functions in my program to obtain the total number of unopened beers in the six packs I have in my fridge. Besides easily refractoring the code to be more efficient, I could also combine the two functions that I created into another function like so:`
        },
        {
            contentType: "Image",
            content: `06-06-images.png`

        },
        {
            contentType: "Text",
            content:`This one-liner function is first accepting an array of six pack objects as input. This input is fed to the filterIrrelevantSixPacks function, and the output it returns is fed to the countRemainingBeers function. The output this last function returns is finally returned by the enclosing function. `
        },
        {
            contentType: "Text",
            content:`Taking it a level deeper, well, you can just re-read this entire post. This last function composition is abstraction on top of abstraction on top of abstraction and so on of the previous examples. `
        },
        {
            contentType: "Text",
            content:`What is to gain from function composition, though, is much better readability. The imperative program in the first examples has been condensed into a one-liner that is easily understood and also resuable. In addition,  the benefits of having code that does not mutate state and produces no side effects will preserved in the function composition. `
        },
        {
            contentType: "Text",
            content:`Keep abstraction and function composition in mind when you’re writing code next time. If not for your own code, but to understand the methods inherent in the language. Abstractions run deep in Javascript and programming. `
        }
    ],
    url: "that-one-drink-abstraction-in-your-javascript",
    photoHeader: "/images/dandelionCompressed.jpg"
};

module.exports = [firstEssay, secondEssay, thirdEssay, fourthEssay, fifthEssay, sixthEssay, seventhEssay];