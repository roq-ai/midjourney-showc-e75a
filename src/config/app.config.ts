interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Member'],
  customerRoles: [],
  tenantRoles: ['Team Member'],
  tenantName: 'Client',
  applicationName: 'Midjourney Showcase',
  addOns: [],
};
