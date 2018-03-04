/* 
 * 1. Put your target sites/domains here. No trailing slashes. Delimited by whitespace. 
 * 2. Put to your FF profile folder (like C:\Users\<name>\AppData\Roaming\Mozilla\Firefox\Profiles\<something>.default\ ), near prefs.js (or add to your user.js, if exists)
 * 3. Restart FF
 */

user_pref("capability.policy.policynames", "localfilelinks");
user_pref("capability.policy.localfilelinks.sites", "http://<site1> https://<site2> http://<site3>");
user_pref("capability.policy.localfilelinks.checkloaduri.enabled", "allAccess");
user_pref("capability.policy.trustable.sites", "<dupe of your https sites here>");