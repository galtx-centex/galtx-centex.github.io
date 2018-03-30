require 'html-proofer'

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

task :test => [:htmlcheck]
