#!/usr/bin/env bash

#  ______    ______    _____    ______    __    __
# /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
# \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
#  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
#   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
#

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
