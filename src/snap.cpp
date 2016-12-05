#include <nan.h>
#include "pixy_cam/pixy_cam.hpp"

NAN_METHOD(snap)
{
    std::vector<uchar> buff;
    pixy_cam pixy;
    bool result = pixy.get_encoded_img(buff);
    if (result) { 
        char *buf = reinterpret_cast<char*>(buff.data());
        Nan::MaybeLocal<v8::Object> js_buffer =  Nan::CopyBuffer(buf, buff.size());
        info.GetReturnValue().Set(js_buffer.ToLocalChecked());
    }
    else
        throw std::runtime_error("No encoded image buffer returned");
}

NAN_MODULE_INIT(init)
{
    NAN_EXPORT(target, snap);
}

NODE_MODULE(MODULE_NAME, init)

