.DEFAULT_GOAL := up
.PHONY: help

DEPS = git vhs grep awk
K := $(foreach exec,$(DEPS),\
        $(if $(shell which $(exec)),some string,$(error "🥶 `$(exec)` not found in PATH please install it")))


didroom-microservices.mp4:
	vhs didroom-microservices.tape

didroom-microservices-install-instruction.md:
	@echo '```sh' > installer.md
	@grep Type didroom-microservices.tape | grep -v "#" | awk -F'"' '{print $$2}'   >> installer.md
	@echo '```' >> installer.md

up: clean didroom-microservices-install-instruction.md didroom-microservices.mp4

clean:
	@rm -rf didroom-microservices
	@rm -f didroom-microservices-install-instruction.md
	@rm -f didroom-microservices.mp4
	@rm -f didroom-microservices.gif

