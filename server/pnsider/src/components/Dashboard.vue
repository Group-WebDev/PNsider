<template>
<v-app light>
    <v-navigation-drawer :clipped="clipped"  v-model="drawer" enable-resize-watcher app id="drawer">
        <v-list-item>
            <v-list-item-avatar>
                <v-avatar color="indigo">
                 <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-title>Admin</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" :to="item.to">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar color="transparent" app :clipped-left="clipped" light>
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
    </v-app-bar>
    <v-content>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            clipped: false,
            items: [{
                    to: '/analytics',
                    title: 'Home',
                    icon: 'mdi-home-city'
                },
                {
                    title: 'My Account',
                    icon: 'mdi-account'
                },
                {
                    to: '/userList',
                    title: 'Users2021',
                    icon: 'mdi-account-group-outline'
                },
                {
                    to: '/userLists',
                    title: 'Users2022',
                    icon: 'mdi-account-group-outline'
                },
                {
                    to: '/login',
                    title: 'Logout',
                    icon: 'mdi-logout'
                },
            ],
            mini: true,
        }
    },
}
</script>
<style>
#drawer{
    box-shadow: 1px 1px 2px whitesmoke, 0 0 25px cornflowerblue, 0 0 5px black;
    background-color: transparent;
}
</style>


