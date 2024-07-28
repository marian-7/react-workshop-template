PORT=3001

.PHONY: init
init:
	pnpm install

.PHONY: dev
dev:
	open -a "Google Chrome" "http://localhost:${PORT}/" --args '--new-window'
	pnpm dev