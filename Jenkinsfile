pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        launchTemplateId = "lt-0fda167710b05d85f"
        awsCredId = "Mufazzal"
    }
    stages {    
        stage('Launch EC2') {
            steps {
                sh 'printenv'
                echo 'Launching EC2 in progress..'
                
                

                echo 'Launching EC2 Finished'
            }
        }          
    }
}
