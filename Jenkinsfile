pipeline {
    agent { label 'slave-ec2-fleet' }
    tools { 
            nodejs "nodejs" terraform "terraform"
        }
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

                sh """
                    cd ATInfraLaunch
                    terraform init
                    terraform apply -input=false -auto-approve -var="launchTemplateName=$launchTemplateName"
                    
                """
                script {
                    def jsonObj = readJSON text: (sh 'terraform output -json')
                }
                echo jsonObj

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
