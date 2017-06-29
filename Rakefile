require 'html-proofer'
require 'jekyll'
require 'colored'

task :build do
  sh "bundle exec jekyll build"
end

task :serve do
  sh "bundle exec jekyll serve -w"
end

task :htmlcheck => :build do
  puts "Running HTML Check..."
  options = { :assume_extension => true,
              :alt_ignore => [/.*/],
              :url_ignore => ['#'] }
  HTMLProofer.check_directory("./_site", options).run
end

task :spellcheck => :build do
  puts "Running Spell Check..."

  errs = 0
  Dir["_site/**/*.html"].each do |file|
    errstr = `hunspell -d ./dict/en_US-gpa-centex -p ./dict/words.txt -H -u #{file} 2>/dev/null`
    if not errstr.empty?
      errs += 1
      puts "#{file}\n#{errstr}\n"
    end
  end

  msg = "Spell Check Completed: #{errs} Errors Found."
  if errs == 0
    puts msg.green
  else
    abort msg.red
  end
end

task :test => [:htmlcheck, :spellcheck]
