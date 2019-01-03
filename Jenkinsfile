pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '--user jenkins:jenkins'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
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
            // node_modules are installed using root permission,
             // therfore must be deleted by root
            sh 'rm -Rf ./node_modules'
            deleteDir()
        }
    }
}
