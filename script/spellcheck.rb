require 'colored'

module Spellcheck
  class << self

    def spellcheck
      rval = 0
      Dir["_site/**/*.html"].each do |file|
        errstr = `hunspell -d dict/en_US-gpa-centex -p dict/words.txt -H -u #{file} 2>/dev/null`
        if not errstr.empty?
          rval += 1
          puts "#{file}\n#{errstr}\n"
        end
      end
      rval
    end

    def run
      puts "Running Spell Check..."
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
