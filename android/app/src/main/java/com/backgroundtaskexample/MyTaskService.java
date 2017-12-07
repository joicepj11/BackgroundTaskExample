package com.backgroundtaskexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class MyTaskService extends HeadlessJsTaskService {
    
  @Override
  protected @Nullable
  HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
    return new HeadlessJsTaskConfig(
    "BackgroundTask", // javascript background task name 
    Arguments.fromBundle(extras),
    3000, // timeout for the task
    true // optional: defines whether or not  the task is allowed in foreground. Default is false
    );

    }
    return null;
  }
}
    