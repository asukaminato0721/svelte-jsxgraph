"""
This file is used to fetch the command on the docs.
@requirements: httpx , lxml
@usage: run this .py, an test.txt will occur at the same folder. 
"""

import os

import httpx
from lxml.etree import HTML, HTMLParser

res = httpx.get("https://jsxgraph.uni-bayreuth.de/docs/index.html")
page = HTML(res.text, HTMLParser())
# https://stackoverflow.com/questions/4531995/getting-attribute-using-xpath
all_code: list[str] = page.xpath('//*[@id="content"]//a/@href')
PATH = os.path.join(os.path.dirname(os.path.realpath(__file__)), "test.txt")
code_xpath = "/html/body/div[4]/div[1]/dl[3]/pre[1]/text()"
base_url = "https://jsxgraph.uni-bayreuth.de/docs/"
with httpx.Client(base_url=base_url) as client, open(PATH, "a") as f:
    for i in all_code:
        res = client.get(i)
        page = HTML(res.text, HTMLParser())
        f.write(f"{i}\n")
        try:
            f.write(page.xpath(code_xpath)[0] + "\n")
            print(f"{i} fin")
        except Exception as e:
            f.write(f"{e}\n")
            continue
