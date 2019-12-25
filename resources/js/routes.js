import AllBooks from './components/AllBooks.vue';
import AddBook from './components/AddBook.vue';
import EditBook from './components/EditBook.vue';
import Contact from './components/Contact.vue';
import Dropdown from './components/Dropdown.vue';
import DynamicInput from './components/DynamicInput.vue';
import Calender from './components/Calender.vue';
import NotificationAlert from './components/NotificationAlert.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'add',
        path: '/add',
        component: AddBook
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditBook
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'dropdown',
        path: '/dropdown',
        component: Dropdown
    },
    {
        name: 'dynamicinput',
        path: '/dynamicinput',
        component: DynamicInput
    },
    {
        name: 'calender',
        path: '/calender',
        component: Calender
    },
    {
        name: 'notificationalert',
        path: '/notification',
        component: NotificationAlert
    }
];
