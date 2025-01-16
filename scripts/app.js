// Firebase 配置
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
  