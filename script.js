<div id="adobe-dc-view" style="height: 350px; width: 320px;"></div>
document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
        		var adobeDCView = new AdobeDC.View({clientId: "f23068fab94747d2867aa6162537f90b", divId: "adobe-dc-view"});
        		adobeDCView.previewFile({
        			content:{location: {url: "<?php echo $attachment->url; ?>"}},
        			metaData:{fileName: "<?php echo $attachment->name; ?>"}
        		}, {embedMode: "SIZED_CONTAINER"});
        	});
        	
        	
        	
        	adobe();
