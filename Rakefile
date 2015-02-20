require 'html/proofer'
require 'jekyll'

task :test do
  Jekyll::Commands::Build.process({})
  HTML::Proofer.new("./_site", {:alt_ignore => [/.*/], :href_ignore => ['#']}).run
end
