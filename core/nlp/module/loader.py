import importlib
from plugins import plugin_config
import os
import time

__plugin_dict = {}


def import_module(plugin_name):
    if __plugin_dict.get(plugin_name) is not None and __plugin_dict.get(plugin_name)["timestamp"] > os.path.getmtime(
            "../../../plugins/plugin_config.py"):
        return __plugin_dict[plugin_name]["module"]
    __plugin_dict[plugin_name] = {"module": importlib.import_module("plugins." + plugin_config.config.get(plugin_name)),
                                  "timestamp": time.time()}
    return __plugin_dict[plugin_name]["module"]


def load_modules():
    for key in plugin_config.config.keys():
        import_module(plugin_config.config.get(key))
