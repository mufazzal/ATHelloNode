pipeline {
    agent { label 'slave-ec2-fleet' }
    tools { 
            nodejs "nodejs" terraform "terraform"
        }
    environment {
        launchTemplateName = "ATTest-EC2Config-ATTestLT-Developement"
        awsCredId = "Mufazzal"
        stackName = "Automation-stack-Developement-" + "$BUILD_ID" 
        port = 3010
        waitTimeForAppInstall = 1
        waitTimeUnitForAppInstall = "MINUTES"
    }
    stages {
        stage('Launch EC2') {
            steps {
                sh 'printenv'
                echo 'Launching EC2 in progress..'

                sh """
                    cd ATInfraLaunch
                    terraform init
                    terraform apply -input=false -auto-approve -var="launchTemplateName=$launchTemplateName" -var="name=Developement-$BUILD_ID"
                """
                script {
                    tfOutput = sh (
                        script: """
                            cd ATInfraLaunch
                            terraform output -json
                        """,
                        returnStdout: true
                    ).trim()
                    echo "tfOutput: $tfOutput"     
                    def jsonObj = readJSON text: "$tfOutput"
                    //def privatIp = "$jsonObj.private_ip.value"
                    env.privatIp = jsonObj.private_ip.value
                    echo env.privatIp
                }           

                echo 'Launching EC2 Finished'
                echo "Waiting for ${waitTimeForAppInstall} ${waitTimeUnitForAppInstall} for Application installation"
            }
        }     

        stage('Installing Dependency') {
            steps {
                sh 'npm install'
            }
        }      

        stage('Running Tests') {
            steps {
                sh "node test ${privatIp} ${port}"
            }
        }      


        stage('Terminating EC2') {
            steps {
                echo 'Terminating EC2 in progress..'
                
                sh """
                    cd ATInfraLaunch
                    terraform apply destroy -auto-approve"
                """

                echo 'Terminating EC2 Finished'
            }
        }      
    }
}
