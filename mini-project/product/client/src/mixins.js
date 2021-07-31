import axios from 'axios';

export default {
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'post',
                url :url,
                data:data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
