require 'html-proofer'
require 'colored'

task :build do
  sh "bundle exec jekyll build"
end

task :server do
  sh "bundle exec jekyll server -w"
end

task :htmlcheck do
  puts "Running HTML Check..."
  options = { :assume_extension => true,
              :disable_external => true,
              :alt_ignore => [/.*/],
              :url_ignore => ['#'] }
  HTMLProofer.check_directory("./_site", options).run
end

task :spellcheck do
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
    puts msg.red
  end
end

task :test => [:htmlcheck]
