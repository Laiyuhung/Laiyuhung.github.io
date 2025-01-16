// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyCcrHtb-gKrUdLHvWVvnPRIqpVKf3P4JeY",
    authDomain: "cpblfantasy-70e21.firebaseapp.com",
    databaseURL: "https://cpblfantasy-70e21-default-rtdb.firebaseio.com",
    projectId: "cpblfantasy-70e21",
    storageBucket: "cpblfantasy-70e21.firebasestorage.app",
    messagingSenderId: "634776615098",
    appId: "1:634776615098:web:a0d6a3c137381828df6a83",
    measurementId: "G-NG8WCGE7XH"
  };
  
  // 初始化 Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  // 新增資料
  document.getElementById('add-data').addEventListener('click', () => {
    const dbRef = ref(db, 'users/');
    const newUserRef = push(dbRef); // 建立新節點
    set(newUserRef, {
      name: "Alice",
      age: 25
    }).then(() => {
      alert('資料已新增！');
    }).catch(error => {
      console.error('新增資料失敗:', error);
    });
  });
  
  // 載入資料
  document.getElementById('load-data').addEventListener('click', () => {
    const dbRef = ref(db);
    get(child(dbRef, 'users')).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const dataList = document.getElementById('data-list');
        dataList.innerHTML = '';
        Object.entries(data).forEach(([key, value]) => {
          const li = document.createElement('li');
          li.textContent = `ID: ${key}, Name: ${value.name}, Age: ${value.age}`;
          dataList.appendChild(li);
        });
      } else {
        console.log('無資料');
      }
    }).catch(error => {
      console.error('載入資料失敗:', error);
    });
  });
  