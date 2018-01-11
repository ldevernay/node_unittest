pipeline {
    agent { docker 'laurentdev/node_unittest' }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Check npm version"'
                sh 'npm --version'
                sh 'echo "install project"'
                sh 'npm install'
                sh 'echo "Run tests"'
                sh 'npm run test'
            }
        }
    }
}
