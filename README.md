# IPFS Version Manager

Install go-ipfs binary easily from CLI or programmatically in a Node.js program.

## Install
```
npm install ivm_ -g
```

## Run
```
ivm
```

## Usage
```
Usage: ivm <command> [<platform>] [<version>] [options]

Commands:
  list                              List available versions and platforms
                                                                   [aliases: ls]
  install [<platform>] [<version>]  Download and install go-ipfs    [aliases: i]

Options:
  --output, -o  Directory to install go-ipfs to           [default: "./go-ipfs"]
  -h, --help    Show help                                              [boolean]

Examples:

  ivm install                  Download and install latest version for current
                               platform and install to current directory

  ivm install darwin v0.4.4    Download and install version v0.4.4 for OS X and
                               install to current directory

  ivm install -o /tmp/latest   Download and install latest version for current
                               platform and unpack it to /tmp/latest
```
