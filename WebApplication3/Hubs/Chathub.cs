using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApplication.Hubs
{
    public class Chathub : Hub
    {
        public void SendMessage(string name, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(name, message);
            //Clients.All.SendAsync("addNewMessageToPage", name, message);
        }
    }
}
