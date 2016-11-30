require 'html-proofer'
require 'jekyll'
require_relative 'script/spellcheck'

task :test do
  Jekyll::Commands::Build.process({})
  HTMLProofer.check_directory("./_site", {:alt_ignore => [/.*/], :url_ignore => ['#']}).run
  Spellcheck.run
end
