# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'bundler' do
  watch('Gemfile')
  # Uncomment next line if Gemfile contain `gemspec' command
  # watch(/^.+\.gemspec/)
end

guard 'coffeescript', output: 'lib', error_to_js: true  do
	watch(%r{^src/(.+\.coffee)$})
end

guard 'coffeescript', output: 'tests', error_to_js: true, bare: true do
	watch(%r{^tests/src/(.+\.coffee)$})
end

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#

guard 'shell' do
  watch(/lib\/.*\.js/) {|m| `cat lib/*.js > memogame.js` }
  watch(/tests\/.*_test.js/) {|m| `cat tests/*_test.js > tests/tests.js` }
  watch(/memogame.js/) {|m| `cat lib/*js > memogame.js` }
end
