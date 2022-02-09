pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        launchTemplateName = "lt-0fda167710b05d85f"
        awsCredId = "Mufazzal"
        stackName = "Automation-stack-" + "$GIT_BRANCH.$BUILD_ID" 
    }
    stages {
        stage('Launch EC2') {
            steps {
                sh 'printenv'
                echo 'Launching EC2 in progress..'
                script {
                    def outputs = cfnUpdate(stack: "$stackName", 
                        file:'ec2.yaml', 
                        params:['launchTemplateName': "$launchTemplateName"], 
                        timeoutInMinutes:10, 
                        tags:["BUILD_ID=$BUILD_ID,GIT_BRANCH=$GIT_BRANCH"], 
                        pollInterval: 5000)
                    
                    echo outputs
                    echo "$outputs"
                }


                echo 'Launching EC2 Finished'
            }
        }     

        stage('Terminating EC2') {
            steps {
                echo 'Terminating EC2 in progress..'
                
                // def outputs = cfnDelete(stack: "$stackName"], pollInterval: 5000)
                
                // echo outputs
                // echo "$outputs"

                echo 'Terminating EC2 Finished'
            }
        }      
    }
}
