pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '--user root:root'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh 'chown -R jenkins:jenkins node_modules'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Headless test') {
            steps {
                sh 'npm run karma'
            }
        }
        stage('Eslint') {
            steps {
                sh 'npm run eslint'
            }
        }
    }
    post {
        success {
            echo 'Hoooray!'
        }
        cleanup {
            sh 'rm -Rf ./*'
            deleteDir()
        }
    }
}
