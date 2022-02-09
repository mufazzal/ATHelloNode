pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        launchTemplateName = "ATTest-EC2Config-ATTestLT-Developement"
        awsCredId = "Mufazzal"
        stackName = "Automation-stack-Developement-" + "$BUILD_ID" 
    }
    stages {
        stage('Launch EC2') {
            steps {
                sh 'printenv'
                echo 'Launching EC2 in progress..'
                withAWS(region:'us-east-1',credentials: "$awsCredId") {
                    script {
                        def outputs = cfnUpdate(stack: "$stackName", 
                            create: 'true'
                            file:'ec2.yaml', 
                            params:['launchTemplateName': "$launchTemplateName"], 
                            timeoutInMinutes:10, 
                            tags:["BUILD_ID=$BUILD_ID,Source_branch=Developement"], 
                            pollInterval: 5000)
                        
                        echo outputs
                        echo "$outputs"
                    }
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
