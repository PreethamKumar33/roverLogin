from typing import Callable

from core.storage.file_handler import FileProcessor

file_processor_creation_funcs: dict[str, Callable[..., FileProcessor]] = {}


def register_file_processor(processor_name: str, processor_creator: Callable[..., FileProcessor]) -> None:
    file_processor_creation_funcs[processor_name] = processor_creator


def unregister_file_processor(processor_name: str):
    file_processor_creation_funcs.pop(processor_name, None)


def create_file_processor(processor_name: str) -> FileProcessor:
    func = file_processor_creation_funcs[processor_name]
    return func()
