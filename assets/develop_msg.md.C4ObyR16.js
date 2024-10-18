import{_ as e,c as d,a0 as n,o as c}from"./chunks/framework.CGHvQLJz.js";const y=JSON.parse('{"title":"消息格式兼容情况","description":"","frontmatter":{},"headers":[],"relativePath":"develop/msg.md","filePath":"develop/msg.md","lastUpdated":1729240823000}'),l={name:"develop/msg.md"};function r(a,t,o,s,i,g){return c(),d("div",null,t[0]||(t[0]=[n('<h1 id="消息格式兼容情况" tabindex="-1">消息格式兼容情况 <a class="header-anchor" href="#消息格式兼容情况" aria-label="Permalink to &quot;消息格式兼容情况&quot;">​</a></h1><p>支持使用 <code>CQ码</code> 发送</p><table tabindex="0"><thead><tr><th>消息格式</th><th>介绍</th><th style="text-align:center;">收</th><th style="text-align:center;">发</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td><code>text</code></td><td>纯文本</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>at</code></td><td>@某人</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>reply</code></td><td>回复消息</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>face</code></td><td><code>qq</code> 表情</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>mface</code></td><td><code>qq</code> 表情包</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>image</code></td><td>图片</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>file</code></td><td>文件</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">发送时可以指定<code>name</code>参数自定义文件名</td></tr><tr><td><code>video</code></td><td>视频</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>record</code></td><td>语音</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>json</code></td><td><code>json</code> 信息</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">发送需要自行签名token</td></tr><tr><td><code>dice</code></td><td>骰子</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>rps</code></td><td>猜拳</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>music</code></td><td>音乐分享</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">QQ音乐传ID发送无须配置 其余需要配置签名服务器,收到的时候是 <code>json</code></td></tr><tr><td><code>node</code></td><td>转发消息节点</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;"></td></tr><tr><td><code>forward</code></td><td>转发消息</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;"></td></tr><tr><td><code>markdown</code></td><td><code>markdown</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;"></td></tr><tr><td><code>shake</code></td><td>私聊窗口抖动/戳一戳</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;"></td></tr><tr><td><code>poke</code></td><td>群聊戳一戳</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;"></td></tr><tr><td><code>share</code></td><td>链接分享</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">收到的时候是 <code>json</code></td></tr><tr><td><code>contact</code></td><td>推荐好友/群</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">发送可以使用接口 <code>ArkSharePeer</code>,收到的时候是 <code>json</code></td></tr><tr><td><code>location</code></td><td>位置</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">收到的时候是 <code>json</code></td></tr><tr><td><code>gift</code></td><td>礼物</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">收到的时候是 <code>json</code></td></tr><tr><td><code>anonymous</code></td><td>匿名发消息</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">已经没有匿名了哦~</td></tr><tr><td><code>redbag</code></td><td><code>红包</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr><tr><td><code>xml</code></td><td><code>xml</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr><tr><td><code>cardimage</code></td><td><code>cardimage</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr><tr><td><code>tts</code></td><td><code>tts</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr></tbody></table>',3)]))}const m=e(l,[["render",r]]);export{y as __pageData,m as default};
