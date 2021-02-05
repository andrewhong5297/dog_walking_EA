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
      "confirmations": 0,
      "params": {
        "address": "31803877693398533056304374249487059501607363464"
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