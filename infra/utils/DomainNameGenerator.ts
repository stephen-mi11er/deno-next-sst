export default class DomainNameGenerator {
    private stageName: string;
    private subdomain?: string;
    private domainName = "yoururl.com"

    constructor(stageName: string, subdomain?: string) {
        this.stageName = stageName;
        this.subdomain = subdomain;
    }

    public getCustomDomainName(): { name: string } | undefined {
        if (this.stageName === 'production') {
            return {
                name: this.subdomain ? `${this.subdomain}.${this.domainName}` : this.domainName,
            };
        }

        if (this.stageName === 'development') {
            return {
                name: this.subdomain ? `dev-${this.subdomain}.${this.domainName}` : `dev.${this.domainName}`,
            };
        }

        if (this.stageName.includes('pr-')) {
            return {
                name: this.subdomain ? `${this.stageName}-${this.subdomain}.${this.domainName}` : `${this.stageName}.${this.domainName}`,
            };
        }

        return undefined;
    }
}