// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Log } from "./util/log";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let config = vscode.workspace.getConfiguration("read-book-status-bar");
  let log = new Log(config);
  context.subscriptions.push(log);

  let search = vscode.commands.registerCommand(
    "read-book-status-bar.search",
    () => {
      // The code you place here will be executed every time your command is executed
      log.search("列表");
    }
  );

  let list = vscode.commands.registerCommand(
    "read-book-status-bar.list",
    () => {
      // The code you place here will be executed every time your command is executed
      log.list();
    }
  );
  
  let pre = vscode.commands.registerCommand(
    "read-book-status-bar.pre",
    () => {
      // The code you place here will be executed every time your command is executed
      log.prePage();
    }
  );
  
  let next = vscode.commands.registerCommand(
    "read-book-status-bar.next",
    () => {
      // The code you place here will be executed every time your command is executed
      log.nextPage();
    }
  );
  let stop = vscode.commands.registerCommand(
    "read-book-status-bar.stop",
    () => {
      // The code you place here will be executed every time your command is executed
      log.stop();
    }
  );
  let start = vscode.commands.registerCommand(
    "read-book-status-bar.start",
    () => {
      // The code you place here will be executed every time your command is executed
      log.stop();
    }
  );
  context.subscriptions.push(search);
  context.subscriptions.push(list);
  context.subscriptions.push(pre);
  context.subscriptions.push(next);
  context.subscriptions.push(stop);
  context.subscriptions.push(start);



  log.run();
}

// this method is called when your extension is deactivated
export function deactivate() {}
