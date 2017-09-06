#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv
from datetime import datetime

with open('hounds.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        file = '_greyhounds/{}.md'.format(row['Name'].lower())
        with open(file, 'w') as f:
            f.write(
"""---
layout: greyhound
title: {name}
date: {date}
category: available
color: {color}
dob: {dob}
pic:
sex: {sex}
cats: {cats}
---

I've just arrived!
""".format(
    name=row['Name'],
    date=datetime.strptime(row['Entry Date'], '%m/%d/%y').strftime('%Y-%m-%d'),
    color=row['Color'],
    dob=datetime.strptime(row['Birthdate'], '%m/%d/%y').strftime('%Y-%m-%d'),
    sex=row['Sex'],
    cats='no' if row['No Cats'] else ''
)
)
