all: deps

deps:
	npm install
	node ivm help

clean:
	rm -rf go-ipfs/
	rm -rf node_modules/

.PHONY: all deps
