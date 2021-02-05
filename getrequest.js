{
  "initiators": [
    {
      "type": "runlog",
      "params": {
        "address": "0xf5a4036ca35b9c017efa49932dca4bc8cc781aa4"
      }
    }
  ],
  "tasks": [
    {
      "type": "openweathermap_cl_ea",
      "params": {
      }
    },
    { "type": "copy",
    "params": {"copyPath": ["result"]}},
    {
      "type": "ethuint256",
    },
    {
      "type": "EthTx"
    }
  ]
}