#!/usr/bin/env sh

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
BUILD_DIR="$ROOT_DIR/.context/resume-build"
SOURCE_FILE="$ROOT_DIR/resume/jonathan_nguyen_resume.tex"
OUTPUT_FILE="$ROOT_DIR/public/Jonathan_Nguyen_resume.pdf"

if ! command -v tectonic >/dev/null 2>&1; then
  echo "tectonic is required to build the resume PDF" >&2
  exit 1
fi

mkdir -p "$BUILD_DIR"
tectonic --outdir "$BUILD_DIR" "$SOURCE_FILE"
install -m 644 "$BUILD_DIR/jonathan_nguyen_resume.pdf" "$OUTPUT_FILE"
