pipeline {
    agent any
    tools {
    nodejs 'nodejs'
}

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
            stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
