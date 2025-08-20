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
        stage('Deploy to Staging') {
            when { expression { return env.GIT_TAG != null } }
            steps {
                echo "Deploying version ${GIT_TAG} to staging..."
                // TODO: Add deployment commands once staging server is ready
            }
        }
    }
}
