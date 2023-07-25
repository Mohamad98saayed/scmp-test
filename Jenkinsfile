pipeline {
  agent any
  stages {
    stage('clone the project') {
      steps {
        git(url: 'https://github.com/Mohamad98saayed/scmp-test', branch: 'master')
      }
    }

    stage('Docker versions') {
      steps {
        sh 'docker --version'
        sh 'docker compose version'
      }
    }

    stage('Build app packages') {
      steps {
        sh 'docker compose build'
      }
    }

  }
}