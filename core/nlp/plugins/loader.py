import importlib
from plugins import plugin_config
import os
import time

plugin_dict = {}


def import_module(plugin_name):
    if plugin_dict.get(plugin_name) is not None and plugin_dict.get(plugin_name)["timestamp"] > os.path.getmtime(
            "plugin_config.py"):
        return plugin_dict[plugin_name]["module"]
    plugin_dict[plugin_name] = {"module" : importlib.import_module("plugins." + plugin_config.config.get(plugin_name)),
                                "timestamp" : time.time()}
    return plugin_dict[plugin_name]["module"]


def load_modules():
    for key in plugin_config.config.keys():
        import_module(plugin_config.config.get(key))
