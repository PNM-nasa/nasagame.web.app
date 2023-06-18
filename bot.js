var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "",  // Write your Bot Token in "" 
    autorun: true
});

/*Event area*/

bot.on("ready", function(event) {
    console.log("Connected!");
    console.log("Logged in as: ");
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function(user, userID, channelID, message, event) {
    console.log(user + " - " + userID);
    console.log("in " + channelID);
    console.log(message);
    console.log("----------");
Logo
[Termux & Nodejs] Xây dựng Discord Bot trên Android - Phần 1
kibria365 ( 51 ) trong #utopian-io • 5 năm trước (đã chỉnh sửa)
Kho
https://github.com/kibriakk/discordbot

Bạn sẽ học cái gì?
Cách cài đặt termux trên android
Cách cài đặt nodejs trong android
Cách tạo bot Discord bằng android
Yêu cầu
Android
thuật ngữ
Nodejs
Id bất hòa
trình duyệt
Khó khăn
Nền tảng
Nội dung hướng dẫn
BƯỚC-1: Cài đặt Termux trên Android
Lúc đầu, hãy tải xuống termux từ google playstore miễn phí sử dụng. Bạn có thể tìm kiếm nó trong google playstore hoặc tải xuống từ liên kết
này ban đầu, nó không yêu cầu quyền root.

Bây giờ hãy mở termux, nó sẽ hiển thị cho bạn một màn hình chào mừng. Nhấn OK.

Để cài đặt nodejs, trước tiên chúng ta cần thiết lập một số nhân viên ban đầu.

Lệnh đầu tiên để viết:

apt update && apt upgrade

và nhấn enter trong bàn phím của chúng tôi. Điều này không cập nhật phần mềm hoặc phiên bản apt nhưng tải xuống danh sách của tất cả các kho lưu trữ có sẵn Bây giờ hãy thiết lập bộ nhớ và cho phép quyền lưu trữ
IMG_20181022_220605_889.JPG

termux-setup-storage

IMG_20181022_220624_764.JPG
Bây giờ chúng ta sẽ cần một trình soạn thảo văn bản mà bạn có thể cài đặt bằng lệnh trong termux.

Có rất nhiều trình soạn thảo văn bản có sẵn cho termux. nhưng chúng tôi sẽ làm việc với 'nano'

Viết lệnh này

apt install nano

Ảnh chụp màn hình_20181019-183525.png

Bây giờ hãy tạo một tệp bằng termux

Viết lệnh này

touch new.js

Điều này sẽ tạo một tệp có tên "new.js" nhưng chúng ta có thể xem tệp ở đâu?

Bạn có thể xem tệp nếu bạn có quyền truy cập root.

Mở trình khám phá tệp và đi đến thư mục gốc của bộ lưu trữ. Sau đó data/data/com.termux/files/home . Nhưng trong trường hợp này, bạn sẽ cần quyền truy cập root.
Nếu bạn không có quyền truy cập root, bạn có thể quên nó đi.

Bây giờ chúng tôi chỉnh sửa tệp bằng trình soạn thảo văn bản

Viết lệnh này và nhấn enter

nano new.js

Bạn có thể thấy rằng một trình soạn thảo văn bản đang mở

Bây giờ hãy viết bất kỳ mã javascript nào ở đây và lưu lại.

Ví dụ tôi viết mã này

console.log("Hi kibria365.Java script is working fine.");
IMG_20181023_014018_096.JPG

Bây giờ hãy lưu bằng CTRL+X

BƯỚC-2: Cài đặt Node.js trong Termux
Nodejs không cần thiết để chạy tệp javascript trong Android. Vì vậy, bây giờ chúng ta sẽ cài đặt nodejs trong termux.

Đầu tiên Mở Termux và viết lệnh này và nhấn "Enter".
pkg install nodejshoặcapt install nodejs

Nó sẽ yêu cầu bạn nhấn y/n , nhấn y và enter để nó được phép cài đặt nodejs.

Ngoài ra, bây giờ chúng ta có thể cài đặt express để có trình quản lý gói tốt.

Viết lệnh này

npm init

Và nhấn enter. Bây giờ bạn sẽ nhận được một số tùy chọn để viết thông tin về dự án của mình. Bạn cũng có thể để trống bằng cách nhấn enter. Cuối cùng npm được khởi tạo.

Bây giờ viết :

npm install express --save

Và nhấn enter.

Cuối cùng Nodejs đã được cài đặt.

Bạn nên kiểm tra nó trước khi thực hiện bước tiếp theo.

Bạn có nhớ chúng ta đã tạo một tệp new.js ở bước trước không. Bây giờ chúng tôi sẽ kiểm tra các nodejs đã cài đặt của chúng tôi bằng cách chạy tệp này.

Viết lệnh này và nhấn Enter.

node new.js

Bạn sẽ thấy một thông báo như thế này.

"Xin chào kibria365.Tập lệnh Java đang hoạt động tốt."

IMG_20181023_013858_448.JPG

Nếu bạn nhận được bất kỳ bình luận lỗi trên bài viết này. Tôi sẵn sàng giúp đỡ bất cứ lúc nào.

BƯỚC-3: Tạo một Discord Bot và thêm nó vào máy chủ discord.
Đi đến liên kết .

Tài khoản của bạn phải được đăng nhập, vì vậy bạn sẽ chuyển thẳng đến danh sách ứng dụng của tài khoản. Nhấn “Ứng dụng mới” để bắt đầu. Đặt tên cho bot, sau đó nhấn vào nút được đánh dấu là “Lưu thay đổi”.

Bây giờ, trên menu bên phải, hãy nhấp vào “Bot”. Khi đã ở trong menu mới, hãy nhấp vào “Thêm Bot” trong tùy chọn Build-a-bot. Nếu bạn chỉ có một ứng dụng — ứng dụng chúng tôi vừa tạo — ứng dụng đó sẽ tự động xuất hiện. Nếu không, hãy chọn nó.

Sau đó viết tên người dùng bot, chọn quyền bot và tải lên ảnh hồ sơ. Sao chép Mã thông báo. và giữ nó ở nơi an toàn.

Ảnh chụp màn hình_20181021-205115.png

Bây giờ chúng tôi thêm bot này vào máy chủ bất hòa của chúng tôi. Đăng nhập vào ứng dụng bất hòa của bạn. Tạo một máy chủ.

Sau đó, chúng ta cần tạo một liên kết.

Vì vậy, hãy chuyển đến tab ứng dụng và mở “Chi tiết ứng dụng” và tìm “ID khách hàng” của bạn, một số dài. Sao chép số và thêm nó vào URL này, thay cho từ CLIENTID.

https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8

Ảnh chụp màn hình_20181021-205826.png
Bây giờ, hãy nhập vào liên kết. Điều đó sẽ đưa bạn đến một trang web nơi bạn có thể cho Discord biết nơi gửi bot của bạn. Chọn tên máy chủ của bạn và nhấn tham gia bot. Bạn sẽ nhận được thông báo trong máy chủ Discord của mình.

Ảnh chụp màn hình_20181022-234528.png

Ảnh chụp màn hình_20181022-234647.png

BƯỚC-4: Cài đặt các mô-đun/gói nút cho bot bất hòa.
Mở Termux và viết lệnh sau

npm install discord.io

Bây giờ nhấn Enter.

mô-đun nút discord.io sẽ được cài đặt.

Bước 5: Tạo Bot mẫu
Tạo một tệp mới bằng lệnh sau và nhấn Enter.

touch bot.js

Sau đó Chỉnh sửa tệp "bot.js" bằng trình soạn thảo văn bản.

nano bot.js

Bây giờ hãy viết từng đoạn mã sau.

/*Variable area*/
var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "",  // Write your Bot Token in "" 
    autorun: true
});

/*Event area*/

bot.on("ready", function(event) {
    console.log("Connected!");
    console.log("Logged in as: ");
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function(user, userID, channelID, message, event) {
    console.log(user + " - " + userID);
    console.log("in " + channelID);
    console.log(message);
    console.log("----------");
Chức năng tin nhắn.

    if (message === "ping") {
        sendMessages(channelID, ["Pong"]); //Sending a message with our helper function
    } else if (message === "picture") {
        sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
    }
});
bot.on("presence", function(user, userID, status, game, event) {
    /*console.log(user + " is now: " + status);*/
});
bot.on("any", function(event) {
    /*console.log(rawEvent)*/ //Logs every event
});
bot.on("disconnect", function() {
    console.log("Bot disconnected");
    /*bot.connect()*/ //Auto reconnect
});
/*Function declaration area*/
function sendMessages(ID, messageArr, interval) {
    var resArr = [], len = messageArr.length;
    var callback = typeof(arguments[2]) === 'function' ?  arguments[2] :  arguments[3];
    if (typeof(interval) !== 'number') interval = 1000;

    function _sendMessages() {
        setTimeout(function() {
            if (messageArr[0]) {
                bot.sendMessage({
                    to: ID,
                    message: messageArr.shift()
                }, function(err, res) {
                    resArr.push(err || res);
                    if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
                });
                _sendMessages();
            }
        }, interval);
    }
    _sendMessages();
}

function sendFiles(channelID, fileArr, interval) {
    var resArr = [], len = fileArr.length;
    var callback = typeof(arguments[2]) === 'function' ? arguments[2] : arguments[3];
    if (typeof(interval) !== 'number') interval = 1000;

    function _sendFiles() {
        setTimeout(function() {
            if (fileArr[0]) {
                bot.uploadFile({
                    to: channelID,
                    file: fileArr.shift()
                }, function(err, res) {
                    resArr.push(err || res);
                    if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
                });
                _sendFiles();
            }
        }, interval);
    }
    _sendFiles();
}
