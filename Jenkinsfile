pipeline {
  agent any
  stages {
    stage('clone the project') {
      steps {
        git(url: 'https://github.com/Mohamad98saayed/scmp-test', branch: 'master')
      }
    }

    stage('Docker Compose Build') {
      steps {
        sh 'docker-compose up'
      }
    }

  }
}