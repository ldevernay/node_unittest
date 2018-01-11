pipeline {
    agent { docker 'node' }
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
