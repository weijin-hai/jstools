export default {
    getCookie(key) {
        var cookies = document.cookie.replace(/\s/g, "").split(";"); //获取cookie字符串  去除空格  转成数组
        let cookie = {};
        for (let i = 0; i < cookies.length; i++) {
            let item = cookies[i].split("=");
            if (key == item[0]) {
                return item[1];
            }
        }
    },
    removeCookie(key) {
        var cookies = document.cookie.replace(/\s/g, "").split(";"); //获取cookie字符串  去除空格  转成数组
        for (let i = 0; i < cookies.length; i++) {
            let item = cookies[i].split("=");
            if (key == item[0]) {
                console.log(item[0]);
                document.cookie =
                    `${item[0]}=;` + "expires=" + new Date().toGMTString();
            }
        }
    },
    setCookie(key, value, time) {
        document.cookie = `${key} =${value}`;
    }
}