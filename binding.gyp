
{
  "targets": [
    {
      "target_name": "smc",
      "sources": [ "native/smc.h", "native/smc.cc" ],
      "link_settings": {
              'libraries': [
                'IOKit.framework'
              ]
       }
    }
  ]
}
