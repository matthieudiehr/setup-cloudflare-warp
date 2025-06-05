import * as core from "@actions/core";
import { cleanup, run } from "./lib/setup-cloudflare-warp";

(async () => {
  const isPost = !!core.getState("isPost");

  try {
    // Main
    if (!isPost) {
      await run();
    }
    // Post
    else {
      await cleanup();
    }
  } catch (error) {
    core.setFailed(error.message);
  }

  if (!isPost) {
    core.saveState("isPost", "true");
  }
  // Explicit process.exit() to not wait hanging promises,
  // see https://github.com/ruby/setup-ruby/issues/543
  process.exit()
}
)();
