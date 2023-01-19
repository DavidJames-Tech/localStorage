declare type LSKey = string|number
declare type LSValue = string|number|boolean|object|Buffer|null

type LSLog = string

declare enum STATUS {
    DONE = 0x00,
    RUNNING = 0x01,
    ERROR = 0x10,
    FATAL_ERROR = 0x11
}
