pipeline {
    agent {
        docker {
            image 'node' 
            args '-p 3000:3000' 
        }
    }
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
