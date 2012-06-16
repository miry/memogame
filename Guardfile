# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'bundler' do
  watch('Gemfile')
  # Uncomment next line if Gemfile contain `gemspec' command
  # watch(/^.+\.gemspec/)
end

guard 'coffeescript', output: 'lib', error_to_js: true do
	watch(%r{^src/(.+\.coffee)$})
end

guard 'coffeescript', output: 'tests', error_to_js: true do
	watch(%r{^tests/src/(.+\.coffee)$})
end
