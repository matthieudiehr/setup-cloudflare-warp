
import * as core from "@actions/core";
import { run } from "./lib/setup-cloudflare-warp";

(async () => {
  try {
    await run();
    // Explicit process.exit() to not wait hanging promises,
    // see https://github.com/ruby/setup-ruby/issues/543
    process.exit()
  } catch (error) {
    core.setFailed(error.message);
  }
})();
