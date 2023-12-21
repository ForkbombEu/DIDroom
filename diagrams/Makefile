.DEFAULT_GOAL := help
.PHONY: help

DEPS = java dot
K := $(foreach exec,$(DEPS),\
        $(if $(shell which $(exec)),some string,$(error "🥶 `$(exec)` not found in PATH please install it")))


PLANTUML_JAR_URL = https://sourceforge.net/projects/plantuml/files/plantuml.jar/download
DIAGRAMS_SRC := $(wildcard *.puml)
DIAGRAMS_PNG := $(addsuffix .png, $(basename $(DIAGRAMS_SRC)))
DIAGRAMS_SVG := $(addsuffix .svg, $(basename $(DIAGRAMS_SRC)))
DIAGRAMS_TXT := $(addsuffix .utxt, $(basename $(DIAGRAMS_SRC)))

help: ##  Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " \033[36m⦿ %-7s\033[0m %s\n\n", $$1, $$2}'

plantuml.jar:
	curl -sSfL $(PLANTUML_JAR_URL) -o plantuml.jar

png: plantuml.jar $(DIAGRAMS_PNG) ##  Render to .PNG raster images
%.png: %.puml 
	@echo $^
	@java -jar plantuml.jar -progress -DRELATIVE_INCLUDE="." $^
	@echo 

svg: plantuml.jar $(DIAGRAMS_SVG) ##  Render vector graphics .SVG files
%.svg: %.puml 
	@echo $^
	@java -jar plantuml.jar -progress -DRELATIVE_INCLUDE="." -tsvg $^
	@echo 

ascii: plantuml.jar $(DIAGRAMS_TXT) ##  Generate ASCII ART .utxt files
%.utxt: %.puml 
	@echo $^
	@java -jar plantuml.jar -progress -DRELATIVE_INCLUDE="." -tutxt $^
	@echo 

clean: ##  Clean rasters
	@rm -f $(DIAGRAMS_PNG) $(DIAGRAMS_SVG) $(DIAGRAMS_TXT)

