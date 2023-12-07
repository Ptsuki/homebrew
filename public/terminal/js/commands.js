
var linkedin = "https://tsuki.icu";
var github = "https://github.com/Ptsuki";
var email = 'mailto:ox_i@outlook.com';
const empty = "&nbsp";

about = [
  "<br>",
  "你来了,最近好吗 👾",
  `我只是一个非常普通的小朋友，没有什么才华，不知道该怎么介绍我自己，现在长大了，请多多关照`,
  `理想主义的花，最终会盛开在浪漫的土壤里，我的热情永远不会熄灭在现实的平凡之中.`,
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">Ohi</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">Ptsuki</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "Work in progress... most projects are still offline, on GitHub or confidential.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is Ohi?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
  "<br>",
  'Also try other commands that you know. I may have included some easter eggs 😆.',
  "<br>",
];

banner = [
  "<br>",
  "  #######    ##     ##   ####    ########  ########  ######  ##     ## ##    ## ####", 
  "##       ##  ##     ##    ##     ##     ##    ##    ##    ## ##     ## ##   ##   ##", 
  "##       ##  ##     ##    ##     ##     ##    ##    ##       ##     ## ##  ##    ##", 
  "##       ##  #########    ##     ########     ##     ######  ##     ## #####     ##",
  "##       ##  ##     ##    ##     ##           ##          ## ##     ## ##  ##    ##",
  "##       ##  ##     ##    ##     ##           ##    ##    ## ##     ## ##   ##   ##",
  "  #######    ##     ##   ####    ##           ##     ######   #######  ##    ## ####",                                                                                                                                                                                  
  "<br>",
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Thank you for coming❤️.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and hit 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd", "vi", "vim", "emacs", "sudo", "gui",
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

