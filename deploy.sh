#!/bin/bash

gulp

if [ $1 = "l" ]
then
        cd app/ && cordova run --device
else
        cd app/ && cordova emulate ios
fi