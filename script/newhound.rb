#!/usr/bin/env ruby

greyhound = ARGV.shift
name = ARGV.shift || greyhound

File.open("greyhounds/#{greyhound}.md", 'w') { |file| file.puts <<-EOS
---
layout: greyhound
title: #{name.capitalize}
greyhound: #{greyhound}
permalink: /greyhounds/#{greyhound}/
---

I've just arrived!
EOS
}
