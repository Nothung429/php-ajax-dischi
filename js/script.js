const app = new Vue ({
    el: "#root",
    data: {
        database: [],
    },
    created() {
        axios.get("http://localhost/esercizio49/php-ajax-dischi/data/api.php")
        .then((response) => {
            console.log(response);
            this.database = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    },
})