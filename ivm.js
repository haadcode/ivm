#! /usr/bin/env node
'use strict'

const argv = require('yargs')
const goipfs = require('@haad/go-ipfs-dep')
const DownloadAndInstall = goipfs.Download
const supportedPlatforms = goipfs.Platforms
const supportedVersions = goipfs.Versions

argv
  .usage('Usage: $0 <command> [<platform>] [<version>] [options]')
  .command({
    command: 'list',
    aliases: ['ls'],
    desc: 'List available versions and platforms',
    handler: (argv) => {
      console.log("Available versions:")
      console.log(supportedVersions.join('\n'))
      console.log("\nAvailable platforms:")
      console.log(supportedPlatforms.join(', '))
      console.log()
    },
  })
  .command({
    command: 'install [<platform>] [<version>]',
    aliases: ['i'],
    desc: 'Download and install go-ipfs',
    handler: (argv) => {
      DownloadAndInstall(argv.version || argv.v, argv.platform || argv.p, null, argv.output || argv.o)
        .catch((e) => console.error)
    }
  })
  .demand(1)
  .example('\n$0 install', '\nDownload and install latest version for current platform and install to current directory')
  .example('\n$0 install darwin v0.4.4', '\nDownload and install version v0.4.4 for OS X and install to current directory')
  .example('\n$0 install -o /tmp/latest', '\nDownload and install latest version for current platform and unpack it to /tmp/latest')
  .option('output', {
    alias: 'o',
    describe: 'Directory to install go-ipfs to',
    default: './go-ipfs'
  })
  .help('help')
  .alias('h', 'help')
  .argv
