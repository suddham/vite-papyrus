import axios from 'axios';

export default {
    async login() {
        const res = await axios.get('http://localhost:3000/api/login');
        return res.data;
    },
    async getEventSingle(eventId) {
        const res = await axios.get(`http://localhost:3000/api/events/${eventId}`);
        return res.data;
    }
};
