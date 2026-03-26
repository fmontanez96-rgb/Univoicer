import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyD7Hn2RHrDQRlUB-XcPtsDQ8WzWQ-q426Y",
authDomain: "univoicer-580d6.firebaseapp.com",
projectId: "univoicer-580d6",
storageBucket: "univoicer-580d6.firebasestorage.app",
messagingSenderId: "732222737914",
appId: "1:732222737914:web:4846212f6734312781a843"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
