# @date November 2016
# @author Lazaros Penteridis <lp@ortelio.co.uk>
#

PROJECT(pixycam_face_detection)
cmake_minimum_required(VERSION 3.1)

set (CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake" )

include(./NodeJS.cmake)
nodejs_init()

add_nodejs_module(${PROJECT_NAME} src/snap.cpp)

target_link_libraries(${PROJECT_NAME} pixy_cam)

find_package(libpixy_cam REQUIRED)
find_package(libusb-1.0 REQUIRED)

target_link_libraries(${PROJECT_NAME} ${LIBUSB_1_LIBRARY})

include_directories (src
                     include
                     common
                     ${LIBUSB_1_INCLUDE_DIRS})
