<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            <head>
                <title>
                    <xsl:value-of select="/rss/channel/title" />Web Feed
                </title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://cdn.tailwindcss.com" />
                <style>
                    @font-face {
                        font-family: "code";
                        src: url("./assets/fonts/code.woff2");
                        font-weight: normal;
                    }

                    @font-face {
                        font-family: "sans";
                        src: url("./assets/fonts/Sans-Regular.woff2");
                        font-weight: normal;
                    }

                    @font-face {
                        font-family: "sans";
                        src: url("./assets/fonts/Sans-Medium.woff2");
                        font-weight: bold;
                    }
                    body{
                        font-family: 'code','sans', sans-serif;
                    }
                </style>
            </head>
            <body class="bg-slate-600 text-white">
                <div class="p-12 container mx-auto flex justify-center flex-col ">
                    <header>
                        <h1 class="text-2xl font-bold mb-5">
                            <img class="w-12 pb-4" src="../images/rss.svg" alt="rss-logo" />
                            <span>Web Feed Preview</span>
                        </h1>
                        <h2 class="text-sm">
                            <xsl:value-of select="/rss/channel/title" />
                        </h2>
                        <p class="text-xs">
                            <xsl:value-of select="/rss/channel/description" />
                        </p>
                        <a target="_blank" class="text-xs mt-4 inline-block underline ">
                            <xsl:attribute name="href">
                                <xsl:value-of select="/rss/channel/link" />
                            </xsl:attribute>
                            Visit Website
                        </a>
                    </header>
                    <h2 class="my-5 text-lg">Recent Items</h2>
                    <div class="flex flex-col gap-4">
                        <xsl:for-each select="/rss/channel/item">
                            <div>
                                <h3>
                                    <a target="_blank" class="text-base inline-block underline">
                                        <xsl:attribute name="href">
                                            <xsl:value-of select="link" />
                                        </xsl:attribute>
                                        <xsl:value-of select="title" />
                                    </a>
                                </h3>
                                <small> Published:
                                    <xsl:value-of select="pubDate" />
                                </small>
                            </div>
                        </xsl:for-each>
                    </div>
                    <div class="text-xs mt-8">Copyright ©
                        <xsl:value-of select="/rss/channel/title" />, All Rights Reserved. Power By RSS.
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>