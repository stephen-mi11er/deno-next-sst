import {DomainNameGenerator} from "./utils/index.ts";

export const frontend = new sst.aws.Nextjs("Frontend", {
    domain: new DomainNameGenerator($app.stage, "").getCustomDomainName(),
    path: "packages/web/frontend"
});