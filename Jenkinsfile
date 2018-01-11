pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "Check npm version"'
                sh 'npm --version'
                sh 'echo "Run tests"'
                sh 'npm run test'
            }
        }
    }
}
