import { Component, OnInit } from '@angular/core';
import * as firebase  from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyBrvP9K_TplUtmFXNMW6sb80ec2ra7-jgM",
      authDomain: "primeiro-app-angular.firebaseapp.com",
      databaseURL: "https://primeiro-app-angular-default-rtdb.firebaseio.com",
      projectId: "primeiro-app-angular",
      storageBucket: "primeiro-app-angular.appspot.com",
      messagingSenderId: "812690102536",
      appId: "1:812690102536:web:27e905eff114c87fec74bd"
    };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  }
  title = 'cloneInstagran';
}
