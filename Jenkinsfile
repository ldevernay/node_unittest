pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'echo "Check npm version"'
                sh 'npm --version'
               // sh 'echo "Run tests"'
               // sh 'npm run test'
            }
        }
    }
}
