document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const subTabs = document.querySelectorAll('.sub-tab');
    const videoElement = document.getElementById('beachVideo');
    

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // 여기에 선택된 탭에 따라 콘텐츠를 변경하는 로직을 추가할 수 있습니다.
        });
    });

    subTabs.forEach(subTab => {
        subTab.addEventListener('click', function() {
            subTabs.forEach(t => t.classList.remove('active'));
            subTab.classList.add('active');
            // 여기에 선택된 서브 탭에 따라 cctv src를 변경하는 로직을 추가할 수 있습니다.
            updateVideoSource(subTab.dataset.tab);
        });
    });
    
    // 비디오 소스를 업데이트하는 함수
    function updateVideoSource(tabValue) {
        let videoSrc = '';
        console.log(tabValue);
        const url1 = 'https://safecity.busan.go.kr/#/cctv?cnt=1&cctvUrl=rtsp%3A%2F%2Fguest%3Aguest%4010.1.210.212%3A554%2Fus676r3DLcDns60tMjIw&sensorName=%28%EC%9E%AC%EB%82%9C%29%ED%95%B4%EC%9A%B4%EB%8C%80%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5';
        const url2 = 'https://safecity.busan.go.kr/#/cctv?cnt=1&cctvUrl=rtsp%3A%2F%2Fguest%3Aguest%4010.1.210.204%3A554%2Fus676r3DLcDns60tMTM2&sensorName=%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC_%EC%86%A1%EC%A0%95%EB%B0%A9%ED%8C%8C%EC%A0%9C';
        const url3 = 'https://safecity.busan.go.kr/#/cctv?cnt=1&cctvUrl=rtsp%3A%2F%2Fguest%3Aguest%4010.20.5.44%3A557%2FSUQtMTA1&sensorName=105_%EB%8B%A4%EB%8C%80%ED%8F%AC';
        
        // iframe 요소를 가져온 후 기존 iframe을 제거
        const container = document.getElementById("ifrm_cntnr");
        const cctv_frame = document.getElementById("cctv_iframe");
        if (cctv_frame) {
            console.log(cctv_frame);
        	container.removeChild(cctv_frame);
        }
        // 새로운 iframe 요소 생성
        const newIframe = document.createElement('iframe');
        newIframe.id = 'cctv_iframe';
        newIframe.width = '100%';
        newIframe.height = '400';
        newIframe.style.border = 'none';
        
        switch (tabValue) {
            case 'haeundae':
                //videoSrc = 'video/ocean_walk.mp4';
                // iframe의 src 속성을 동적으로 변경
        		newIframe.src = url1;
                break;
            case 'songjeong':
                newIframe.src = url2;
                break;
            case 'dadepo':
                newIframe.src = url3;
                break;
            default:
                //기본 영상 경로
                newIframe.src = url1;
                break;
        }
        
        // 새로운 iframe을 컨테이너에 추가
        container.appendChild(newIframe);
        
        // iframe 새로고침 (src 재할당으로 다시 로드)
        // iframe.contentWindow.location.reload(); cors 문제 발생
        
        /*
        비디오 소스를 업데이트하고 재생
        if (videoElement) {
            videoElement.src = videoSrc;
            videoElement.load();
            videoElement.play();
        }
        */
    }
});
