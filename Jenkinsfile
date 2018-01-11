pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Check npm version"'
                sh 'npm --version'
                sh 'echo "Run tests"'
                sh 'npm run test'
            }
        }
    }
}
