const Prompt = require('../../models/Prompt');
module.exports = async function (event) {
    console.log("<receive_message>");
    const { client } = this;
    const text = event.message.text;
    const psid = event.sender.id;
    if (text === 'generic') {
        const elements = [{
            title: "First card",
            subtitle: "Element #1 of an hscroll",
            image_url: "http://messengerdemo.parseapp.com/img/rift.png",
            buttons: [{
                type: "web_url",
                url: "https://3000-c5d48a10-3ffd-4635-b0e9-36c6e897295d.ws-us02.gitpod.io/",
                title: "web url"
            }, {
                type: "postback",
                title: "Postback",
                payload: "Payload for first element in a generic bubble",
            }],
        }, {
            title: "Second card",
            subtitle: "Element #2 of an hscroll",
            image_url: "http://messengerdemo.parseapp.com/img/gearvr.png",
            buttons: [{
                type: "postback",
                title: "Postback",
                payload: "BUTTON @2",
            }],
        }];
        client.sendGenericTemplate(psid, elements, { image_aspect_ratio: 'square' });
        return;
    }
    // if (text == 'test') {
    //     client.sendReceiptTemplate(sender, require('./assets/recipient'));
    //     return;
    // }
    // if (text == 'cooking') {
    //     cooking(client, sender);
    // }
    if (text == 'connect') {
        // await Prompt.deleteMany({ ps_id: psid, name: 'student_code' });
        // const prompt = new Prompt({ ps_id: psid, name: 'student_code' });
        // await prompt.save();
        // const password = await this.emit('prompt_create', psid, 'student_pass', 'Nhập mật khẩu');
        // const code = await this.emit('prompt_create', psid, 'student_code', 'Nhập tài khoản sinh viên(VD: CT030208)', password._id);
        // console.log(password);
        // this.emit('prompt_fflush', psid);
        this.emit('prompt_create', psid, [
            { name: 'student_code', question: "Nhập tài khoản sinh viên(VD: CT030208)" },
            { name: 'student_pass', question: "Nhập mật khẩu" }
        ]);
        // this.emit('prompt_ask', psid, code._id);
        return;
    }
    client.sendText(psid, `Echo: ${text.substring(0, 200)}`);
}