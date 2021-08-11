---
sidebar_position: 2
---

# Outlook/Microsoft 365
The Outlook integration enables you to use your outlook.com or Microsoft 365 account to use for conflict checking and event bookings.

## Obtaining Microsoft Graph Client ID and Secret
1. Open [Azure App Registration](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) and select New registration
2. Name your application
3. Set **Who can use this application or access this API?** to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**
4. Set the **Web** redirect URI to `<CALENDSO URL>/api/integrations/office365calendar/callback` replacing CALENDSO URL with the URI at which your application runs.
5. Use **Application (client) ID** as the **MS_GRAPH_CLIENT_ID** attribute value in .env
6. Click **Certificates & secrets** create a new client secret and use the value as the **MS_GRAPH_CLIENT_SECRET** attribute