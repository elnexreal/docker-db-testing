#!/bin/sh
yarn prisma generate
yarn prisma db push
yarn dev