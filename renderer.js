/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });
  
        require(['vs/editor/editor.main'], function () {
          var editor = monaco.editor.create(document.getElementById('container'), {
            value: ['def x()', '\tprint("Hello world!")'].join('\n'),
            language: 'python'
          });
          

          
        });