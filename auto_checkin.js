const url = 'https://app.nio.com/c/award_cn/checkin';
const headers = {
    'Host': 'app.nio.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cookie': 'tgw_l7_route=ce9af237110ff5f5cfa8ee27338af385; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22324838153%22%2C%22first_id%22%3A%2218d24e76841558-01cb9b252742a6c-18181606-400760-18d24e7684236ca%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThkMjRlNzY4NDE1NTgtMDFjYjliMjUyNzQyYTZjLTE4MTgxNjA2LTQwMDc2MC0xOGQyNGU3Njg0MjM2Y2EiLCIkaWRlbnRpdHlfbG9naW5faWQiOiIzMjQ4MzgxNTMifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22324838153%22%7D%2C%22%24device_id%22%3A%2218d24e76841558-01cb9b252742a6c-18181606-400760-18d24e7684236ca%22%7D; RANGERS_WEB_ID=user; 2wmbAx0mNTVAO=5t07PTv9hjwZT_ZtrWznbxJnrfm.wJJY9H1N_ltvl9tFSFYk2fs1XHkdhTY92N_l5rVG9kYyVXbipfqivgI7eEa',
    'Connection': 'keep-alive',
    'kkgx2gpc': 'BiokKXapy14kM0PNmYz-RbuY-8YJ_hzR6YaONSLHF9vuOTt6-7squLAUmYPHG87K3uJ__MtVfFFF1htKaQAicnR5mkSZiUN3vb9WsxSFP336lh8hjHytf8-Db8eU8UHd8CZiQh4z_M8mgDl0SDa91LCj-Ue-TfNLlV9ipJFSeQjJ1wDkSxZLa0sZere..7fCSTlGaIxQ2s70UpjrLCk6Vz4PS2OdIzjLRhfMBj2SdgwrKkEI28LC7Ob4DYOOuUOpXb8VZEahMhknemLwT_qqUm3zAsHrrESH7U6SYHFhfMBJ67pVtSRsGDjBSI7q6MOzgdCAtE6JTixBkg81LG1vTOkPtO4jpv8Nga50nXIyQAYJLtaM9zGLbvXUx6WaWS0tRgVKJqpELCD6ggkF59h88ZaM-GN9rT6KdU4XzBs2HxMxZRveqwq-4rHWfPSfAMZ-fM885lxJJwiscUqg-qgMKus5MOps5LUCHa9YMuoT9mlRByBmkQFXmc5KHmnaWdDS9bfhtjm_j1ziZ6EcWe7xhnso4RLaZd4SCVXt_tXN-H8hqz6s1TWAAC6mU3-8tetvYest';

// 构造请求参数
const params = {
    method: 'POST',
    headers: headers,
    body: 'event=checkin'
};

// 发送请求
fetch(url, params)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
