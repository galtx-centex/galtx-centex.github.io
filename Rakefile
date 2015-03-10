require 'html/proofer'
require 'jekyll'
require_relative 'script/spellcheck'

task :test do
  Jekyll::Commands::Build.process({})
  HTML::Proofer.new("./_site", {:alt_ignore => [/.*/], :href_ignore => ['#']}).run
  Spellcheck.run
end
