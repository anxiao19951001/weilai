fetch('https://app.nio.com/c/award_cn/checkin?app_id=10002&app_ver=5.24.8&device_id=7173afb5cb0d4d0cb43dc0aadc22fe83&lang=zh-cn&region=cn&timestamp=1709185815&sign=62100227dd7b83e3850da00603546289', {
  method: 'POST',
  headers: {
    'Host': 'app.nio.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cookie': 'tgw_l7_route=605b40c859ed7a3967705c50ecc0e705; 2wmbAx0mNTVAP=mp4Jcbse1_e.aXkzV4coR3T_.f8hvXh4MeviiuL_047Xi0Wm0Z1r9ZgO9.YIWPxHcfIeQetGIT5ywdMm1ENMUFEN6jsm1zf7OATMAQprJSw4eiQbm_al4uscX2qHOl.8lk7GOq8dQrbEyphzwkMW_UGUJzHj1A38wrlo5FRk.fu42PIJJa_oUbi7jhBk747dTp9l3D3lfkBv.gLSfTYV8tvZuF7yQWB_QdiWd88P5Y8zwnkSXeIaGbcClNspTWNr.cx1fSWPFsDt8MKDm1oIoQdhInJD.fb_.LE9_z1CIk2_mE.cX2rEVh3nqHER4bDDo6wd..JjXMb7673XNhcOk9kWuN6Y9.Wgw8LOY_NhWeBcbYCGkhRYG18vwIBA3ELkzhyhW033bNuN46rxjBqdbGLHr7EHdF0O9Ga86ePChmObDW7VgovYqlcpclLrRGRM.83rtVn4FphcayzAdJk_YxQlHDwl3wP7QjqpFkIo6LxEomLflJoywE_tgdO6lo1TfzaZTl.vMwr5mOPNxbt_88o7pGfzA7v7kNFg7oSucRZhjwdeE9VSEU2MKDeHSkxN_9bQQxXajnLGKbulyoH9Ke6xI42dZdDQQow0io6njMl; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22324838153%22%2C%22first_id%22%3A%2218dda8bb2c31568-092e7e8f6a8b34-11181a01-400760-18dda8bb2c43892%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThkZGE4YmIyYzMxNTY4LTA5MmU3ZThmNmE4YjM0LTExMTgxYTAxLTQwMDc2MC0xOGRkYThiYjJjNDM4OTIiLCIkaWRlbnRpdHlfbG9naW5faWQiOiIzMjQ4MzgxNTMifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22324838153%22%7D%2C%22%24device_id%22%3A%2218dda8bb2c31568-092e7e8f6a8b34-11181a01-400760-18dda8bb2c43892%22%7D; RANGERS_WEB_ID=user; 2wmbAx0mNTVAO=5t07PTv9hjwZT_ZtrWznbxJnrfm.wJJY9H1N_ltvl9tFSFYk2fs1XHkdhTY92N_l5rVG9kYyVXbipfqivgI7eEa',
    'Connection': 'keep-alive',
    'kkgx2gpc': 'Bq5sSWMwiQfkcFnlhTR_Oi28xJQ2b_q0NtJ6TGhjSqFBtSYzJdldKPxS2v6h4VJXNuEgHebAHOeh4tADekHsnybnejEMUuQN7rROtLeRupH86QHlqDmgHmOWQ9bLXMzQAhow78w_Sgh1zgUSFXOSOM-ERyWaK-sMju0Y158O.gjrrinuRZWtggTKnTCbrsLyW8RGJZ0W9ub8eU4qqGilZUEeHIPVhnRH_72f8oNcJ6d3KXgFBI1IH8q38paCEh9EGfNzQbtrVrx7cetN7LyBQNfcJEICWrHVZF0QxqboUzMXUbkbbpQHOdfUYmcu-dOxG804MkFh5uPuYOrm0UE3NZ5J_-xI3exBrIrjcFdFnuLl6sZQzUipIqaAjG5k05EDslDtsI-s1z1F4uMYdFcpsmF8nmSf1JFeaEVBnym9gd8uixzIPqG