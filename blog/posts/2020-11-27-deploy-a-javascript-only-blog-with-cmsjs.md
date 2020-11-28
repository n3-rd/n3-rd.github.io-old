---
layout: post
title: Deploy a javascript only blog with CMS JS
excerpt: Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
author: Chris
---



<img src="https://i.ibb.co/tzkZ3VC/cmsjs.png" alt="cmsjs banner">

<p>
Deploying a blog can be sometimes strenous, from Jekyll to Ghost CMS and Hugo, I've tried out quite a lot of
CMS Deployment methods, but there's just one that more than meets my eye - CMS JS
</p>
<p>
CMS is a Javascript only(yes, javascript only!) blog CMS that can be deployed in only a matter of minutes.
This ensures that you dont need any backend tools like Node JS or Ruby to have your own blog, CMS JS is a lightweight
and simple alternative 
</p>

<h3>How to set up CMS JS</h3>
<p>
CMS JS currently has two modes, Server mode and Github mode which means you can choose to host your content on Github with Github Pages or you can choose to self host your content.
</p>
<a href="https://github.com/chrisdiana/cms.js/wiki/Server-Mode">Learn more about server mode here</a>

<h3>How to set up server mode</h3>
<ol>
<li>Clone the <a href="https://github.com/chrisdiana/cms.js-starter">starter repo</a>: <code>git clone https://github.com/chrisdiana/cms.js-starter.git</code> or download the latest <a href="https://github.com/chrisdiana/cms.js/releases/latest">release</a>
</li>
<li>Navigate to js/config.js and modify the settings to your liking.<br>
<img src="https://i.ibb.co/qBhH1tP/image.png"/><br>
Change <code>mode</code> to GITHUB or SERVER mode based on your hosting environment
</li>
</ol>