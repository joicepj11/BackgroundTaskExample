package com.backgroundtaskexample;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ServiceCaller extends ReactContextBaseJavaModule {

    public ServiceCaller(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ServiceCaller";
    }
    
    @ReactMethod
    public void startService(){
        Intent service = new Intent(getReactApplicationContext(), MyTaskService.class);
        Bundle bundle = new Bundle();
        bundle.putString("foo", "bar");
        bundle.putString("oo", "bar");
        bundle.putString("fo", "bar");
        service.putExtras(bundle);
        getReactApplicationContext().startService(service);
        HeadlessJsTaskService.acquireWakeLockNow(getReactApplicationContext());
    }

}
