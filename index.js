import { run } from "./src/main.js";

const DEFAULT_STEP_SIZE = "15000-20000";
const DEFAULT_XIAOMI_AMAZFIT_USERNAME = "15523432021"
const DEFAULT_XIAOMI_AMAZFIT_PASSWORD = "gq200606"

// 获取环境变量
const config = {
  username: DEFAULT_XIAOMI_AMAZFIT_USERNAME ,
  password: DEFAULT_XIAOMI_AMAZFIT_PASSWORD ,
  user_id:  "",
  app_token: "",
  step_size:  DEFAULT_STEP_SIZE,
};

await run(config);
