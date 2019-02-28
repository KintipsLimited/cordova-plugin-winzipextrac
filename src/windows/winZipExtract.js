cordova.commandProxy.add("extractFile",{
    uwp: async function (successCallback, errorCallback, zipFileName) {

        try{
            var service = new WinRuntimes.Service();  
            await service.hello(zipFileName);
            successCallback(1);
        } catch (e){
            errorCallback(-1);
        }
            
    }
});