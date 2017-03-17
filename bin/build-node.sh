#!/usr/bin/env bash

#  ______    ______    _____    ______    __    __
# /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
# \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
#  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
#   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
#
# This project is a part of the “Byte-Sized JavaScript” videocast.
#
# You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
#
# MIT Licensed — See LICENSE.md
#
# Send your comments, suggestions, and feedback to me@volkan.io
#

rm -rf dist/nodejs
webpack --config webpack.node.config.js
