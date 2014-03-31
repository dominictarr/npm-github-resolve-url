
module.exports = function toGithub (repo) {
  //git://github.com/substack/sockjs-client.git#browserify-npm
  //https://github.com/isaacs/readable-stream/archive/master.tar.gz
  //https://codeload.github.com/substack/node-browser-resolve/tar.gz/dir-replace
  //git+ssh://git@github.com:isaacs/readable-stream.git

  var m = /^(?:https?|git):\/\/github.com\/([^/]+\/[^/]+)\/archive\/(.+)\.tar\.gz$/.exec(repo)

  if(!m)
    m = /^(?:git\+ssh:\/\/git@github.com:)([^/]+\/[^/#]+?)(?:\.git)?(?:#(.*))?$/.exec(repo)

  if(!m)
    m = /^(?:(?:git|https?):\/\/github.com\/)?([^/]+\/[^/#]+?)(?:\.git)?(?:#(.*))?$/.exec(repo)


  if(!m && /^http/.test(repo)) return repo

  if(m) return 'https://codeload.github.com/' + m[1] + '/tar.gz/' + (m[2] || 'master')

  return null
}

