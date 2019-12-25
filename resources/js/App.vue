<template>
    <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <a href="https://www.mynotepaper.com/" target="_blank"><img src="https://cdn.mynotepaper.com/wp-content/uploads/2019/03/14214011/header-logo.png"></a><br>
            <span class="text-secondary">Laravel & Vue CRUD Single Page Application (SPA) Tutorial</span>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/add" class="nav-item nav-link">Add Book</router-link>
                    <router-link to="/contact" class="nav-item nav-link">Contact Us</router-link>
                    <router-link to="/dropdown" class="nav-item nav-link">Drop Down</router-link>
                    <router-link to="/dynamicinput" class="nav-item nav-link">Dynamic Input</router-link>
                    <router-link to="/calender" class="nav-item nav-link">Calender</router-link>
                    <router-link to="/notification" class="nav-item nav-link">Notification</router-link>
                </div>
            </div>
        </nav>
        <br/>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        
    </div>
</template>

<script>
    export default {}
</script>
