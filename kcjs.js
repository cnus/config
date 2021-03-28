/**
 * @supported 改为你的设备 ID
 * @Author: Jianxun
 * @Blog: https://lijianxun.top
 * @使用介绍：https://lijianxun.top/61.html
 */

let Cookie = $prefs.valueForKey("kcjsCookie");

let Req = {
  url: "https://n3ro.life/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: "https://n3ro.life",
    Referer: "https://n3ro.life/user",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "N3RO",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("N3RO", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("N3RO", "失败", error);
  }
});
