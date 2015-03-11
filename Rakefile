require 'html/proofer'
require 'jekyll'
require_relative 'script/spellcheck'

task :test do
  Jekyll::Commands::Build.process({})
  HTML::Proofer.new("./_site", {:alt_ignore => [/.*/], :href_ignore => ['#']}).run
  Spellcheck.run
end

task :clean do
  `git checkout words.txt`
  `find -name "*.tmp" | xargs rm -f`
  `rm -rf _site/`
end
