#!/usr/bin/env bash

#  ______    ______    _____    ______    __    __
# /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
# \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
#  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
#   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
#
# This project is a part of the “Byte-Sized JavaScript” videocast.
#
# You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
# MIT Licensed — See LICENSE.md
#
# Send your comments, suggestions, and feedback to me@volkan.io
#

npm run build:node

if [ $? != 0 ]; then
    echo "Build failed. — Exiting."

    exit 1
fi

mocha

if [ $? != 0 ]; then
    echo "Tests failed. — Exiting."

    exit 1
fi

npm run lint

if [ $? != 0 ]; then
    echo "Lint failed. — Exiting."

    exit 1
fi

echo "Everything is awesome!";
