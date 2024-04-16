.DEFAULT_GOAL := up
.PHONY: help

NAME = didroom-microservices
INSTALLER = $(NAME)-installer.sh
DEPS = git vhs grep awk
K := $(foreach exec,$(DEPS),\
        $(if $(shell which $(exec)),some string,$(error "🥶 `$(exec)` not found in PATH please install it")))

$(NAME).mp4:
	vhs $(NAME).tape

$(INSTALLER):
	@echo "#!/usr/bin/env bash" > $(INSTALLER)
	@grep Type $(NAME).tape | grep -v "#" | awk -F'"' '{print $$2}' >> $(INSTALLER)
	@chmod +x $(INSTALLER)

up: clean $(INSTALLER) $(NAME).mp4

clean:
	@rm -rf didroom_microservices
	@rm -f $(INSTALLER)
	@rm -f $(NAME).mp4
	@rm -f $(NAME).gif

