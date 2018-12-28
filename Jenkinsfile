pipeline {
    agent {
        docker {
            image 'node:8.9.4'
            args '--user root:root'
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
                echo env.CHROME_BIN
                sh 'npm run karma:jenkins'
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
            // sh 'rm -Rf ./node_modules'
        }
    }
}
