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
        stage('eslint') {
            steps {
                sh 'npm run eslint'
            }
        }
    }
}
