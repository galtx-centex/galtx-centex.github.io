require 'colored'
require 'redcarpet'
require 'redcarpet/render_strip'

module Spellcheck
  class << self

    def addnames
      names = []
      File.read("_data/greyhounds.yml").lines do |line|
        names << line[/(name|url):\s(.*)$/, 2]
      end
      File.read("_data/contacts.yml").lines do |line|
        if l = line[/name:\s(.*)$/, 1]
          names += l.split
        end
      end
      names.compact!.uniq!
      File.open("words.txt", "a") do |file|
        file << names * "\n" << "\n"
        file << names.map { |w| w + "'s" } * "\n" << "\n"
      end
    end

    def spellcheck
      rval = 0
      md = Redcarpet::Markdown.new(Redcarpet::Render::StripDown)
      files = `git ls-files`.split.select { |v| v =~ /(\.html|\.md)/ }
      files.each do |file|
        tmpfile = "#{file}.tmp"
        File.write(tmpfile, md.render(File.read(file)))
        errstr = `hunspell -d en_US-insane -p words.txt -H -u #{tmpfile}`
        if not errstr.empty?
          rval += 1
          puts "#{file}\n#{errstr}\n"
        end
      end
      rval
    end

    def run
      puts "Running Spell Check..."
      addnames
      errs = spellcheck
      msg = "Spell Check Completed: #{errs} Errors Found."
      if errs == 0
        puts msg.green
      else
        puts msg.red
      end
      exit errs
    end

  end
end
