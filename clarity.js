var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';

const setfree = '/special/queryByCatalogAll';

if (url.indexOf(setfree) != -1) {
    for (var i = 0; i < obj.data.length; i++) {
        obj.data[i].isFree = true;
    }
    body = JSON.stringify(obj);
}

if (!obj.data.isFree) {
    obj.data.isFree = true;
    if (obj.data.pictureList) {
        for (var i = 0; i < obj.data.pictureList.length; i++) {
            obj.data.pictureList[i].isFree = true;
        }
        body = JSON.stringify(obj);
    }
}

if (url.indexOf(userinfo) != -1) {
    obj.data.level = 5;
    obj.data.expireTime = 4070965662;
    body = JSON.stringify(obj);
}

$done({
    body
});
