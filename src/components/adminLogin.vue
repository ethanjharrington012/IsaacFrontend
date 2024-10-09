<script>
export default {
    name: 'adminLogin',
    data() {
        return {
            showPopup: false,
            email: 'ethanjharrington@gmail.com',
            password: 'Hiphop22!',
            isLoggedIn: false
        }
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        login() {
            // Here you would typically validate the credentials
            // For this example, we'll just set isLoggedIn to true
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminEmail', this.email);
            this.showPopup = false;
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminEmail');
        }
    },
    mounted() {
        // Check if admin is already logged in
        if (localStorage.getItem('adminLoggedIn') === 'true') {
            this.isLoggedIn = true;
            this.email = localStorage.getItem('adminEmail');
        }
    }
}
</script>

<template>
    <div>
        <button v-if="!isLoggedIn" @click="togglePopup" class="bg-[#DAA520] border-2 border-[#654321] text-[#654321] font-semibold py-2 px-4 rounded-md hover:bg-[#B8860B] transition-all duration-300 ease-in-out transform hover:scale-105 dark:bg-[#40E0D0] dark:hover:bg-[#20B2AA] dark:text-[#FFFFFF] dark:border-[#E6E6FA]">
            Admin Login
        </button>
        <div v-else class="flex items-center space-x-4">
            <p class="text-gray-700">Welcome, {{ email }}</p>
            <button @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
        </div>
    </div>
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-8 rounded-lg shadow-xl">
            <h2 class="text-2xl font-bold mb-4">Admin Login</h2>
            <input v-model="email" type="email" placeholder="Email" required class="w-full p-2 mb-4 border rounded">
            <input v-model="password" type="password" placeholder="Password" required class="w-full p-2 mb-4 border rounded">
            <div class="flex justify-between">
                <button @click="login" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
                <button @click="togglePopup" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>