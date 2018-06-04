<?php

/**
 * Copyright 2017 Includable
 * Created by Thomas Schoffelen
 */

/*
 * This is the root file for your web controller.
 *
 * Usually this file will handle most of the logic of the web interface, including loading
 * templates and displaying them to the user. In this case, a simple view loads the React root component.
 * See web/app/components/RootComponent.js for the accompanying javascript.
 */

// Example API endpoint for AJAX call
Route::get('/example-endpoint', function() {
    $this->response->json([
        'name' => $this->user->name
    ]);
});

// If no routes before this get matched, this will be executed
// Which outputs the React app itself
Route::catch(function() {
    view('index', [
        'baseUrl' => $this->request->base_url
    ], [
      'navbar' => false
    ]);
});
