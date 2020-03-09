// Chrome只能在https协议下访问地理位置？
		function getGeolocation(callback) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(callback);
			} else {
				alert("您的浏览器版本不支持地理定位！");
			}
		}

		function showPosition(position) {
			var tr = document.getElementsByTagName("tr")[1];
			var tds = tr.getElementsByTagName("td");
			tds[0].innerHTML = Math.round(position.coords.latitude);
			tds[1].innerHTML = Math.round(position.coords.longitude);
			tds[2].innerHTML = Math.round(position.coords.altitude);		
		}

		document.getElementById("getGeo").onclick = getGeolocation(showPosition);