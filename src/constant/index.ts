import { IFilterXSSOptions } from "xss";

// logger
export const LOGGER_ID = "main";

// regex patterns
export const COLOR_HEX_FORMAT = /^#(?:[0-9a-fA-F]{3}){1,2}$/g;
export const DATABASE_UUID_FORMAT = /^[a-f\d]{24}$/i;

// database
export const DEFAULT_DB_TIMEOUT = 3000;

// xss
export const DEFAULT_XSS_OPTIONS: IFilterXSSOptions = {
  whiteList: {},
  stripIgnoreTag: true,
  stripBlankChar: true,
};
