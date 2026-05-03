from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 16)
        self.cell(0, 10, 'AegisGAN Native Linux Deployment Guide', 0, 1, 'C')
        self.ln(10)

pdf = PDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_font("Arial", size=11)

content = """This guide contains all the commands you need to package the AegisGAN platform from your current machine and deploy it as a persistent, automatically-running background service on any other Linux machine.

---------------------------------------------------------------------------------------------------------
Phase 1: Package the App (On your current Windows machine)
---------------------------------------------------------------------------------------------------------
Before you can move the app to a Linux server, you need to compress the entire project directory into a ZIP file. Open PowerShell and navigate to the folder containing the project, then run:

Compress-Archive -Path e:\\AegisGAN_live -DestinationPath e:\\AegisGAN_live.zip

(Alternatively, you can just right-click the AegisGAN_live folder in File Explorer and select "Compress to ZIP file".)


---------------------------------------------------------------------------------------------------------
Phase 2: Transfer the App to the Linux Server
---------------------------------------------------------------------------------------------------------
You need to send the AegisGAN_live.zip file to your Linux machine. You can use a tool like WinSCP, FileZilla, or the scp command in PowerShell.

scp e:\\AegisGAN_live.zip user@192.168.1.100:~


---------------------------------------------------------------------------------------------------------
Phase 3: Install the App (On the target Linux machine)
---------------------------------------------------------------------------------------------------------
Log into your Linux machine via SSH. The following commands will unzip the project and run the automated installer. The installer will automatically install Zeek, Python, Node.js, and configure the background system services.

sudo apt update
sudo apt install unzip -y
unzip AegisGAN_live.zip
cd AegisGAN_live
chmod +x installer/install.sh
sudo ./installer/install.sh

*Note:* The installation might take a few minutes as it downloads dependencies and builds the React frontend.


---------------------------------------------------------------------------------------------------------
Phase 4: Verify and Manage Services
---------------------------------------------------------------------------------------------------------
Once the installation script finishes, AegisGAN is officially running in the background! It is managed by systemctl, meaning it will automatically start itself even if the server reboots. Here are the commands you can use to check the status or restart the system:

sudo systemctl status aegisgan-backend
sudo systemctl status aegisgan-frontend
sudo systemctl status aegisgan-bridge

If you ever need to restart the entire platform:
sudo systemctl restart aegisgan-backend aegisgan-frontend aegisgan-bridge

If you want to view the live terminal output/logs of the background ML backend:
sudo journalctl -fu aegisgan-backend


---------------------------------------------------------------------------------------------------------
Phase 5: Access the Dashboard
---------------------------------------------------------------------------------------------------------
The system is now sniffing network traffic in real-time and running inference! To view the live SOC Dashboard, open a web browser on any machine on the same network and navigate to the Linux server's IP address on port 5173:

http://<LINUX_SERVER_IP>:5173
(Example: http://192.168.1.100:5173)
"""

for line in content.split('\n'):
    pdf.multi_cell(0, 6, txt=line.encode('latin-1', 'replace').decode('latin-1'))

pdf.output("installer-docs.pdf")
print("PDF created successfully!")
