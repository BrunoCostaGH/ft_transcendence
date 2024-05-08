export default class AbstractView {
    static userQueue = {};

    static authed = false;
    static userData = {};
    static userReadyList = {};
    static wsCreated = false;
    static wsConnectionStarted = false;
    static gameOver = null;
    static previousLocation = null;

    constructor() {
    }
    static formData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    static userInfo = {
        id: "",
        username: "",
        email: "",
        avatar: "",
    };

    static cleanGameData() {
        this.userQueue = {};
        this.userData = {};
        this.userReadyList = {};
        this.wsCreated = false;
        this.wsConnectionStarted = false;
        this.previousLocation = null;
        this.gameOver = null;
    }

    static cleanUserData() {
        this.formData = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
        this.userInfo = {
            id: "",
            username: "",
            email: "",
            avatar: "",
        };
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}