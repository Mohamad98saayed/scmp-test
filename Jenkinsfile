pipeline {
  agent any
  stages {
    stage('Check docker version') {
      steps {
        sh 'docker --version'
      }
    }

    stage('ssh into server') {
      steps {
        sh '''ssh -i /var/mern-keypair.pem ubuntu@3.64.47.63
git pull https://github.com/Mohamad98saayed/scmp-test'''
      }
    }

  }
}