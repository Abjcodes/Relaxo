// chrome.runtime.onMessage.addListener(messageReceived);
// function messageReceived() {
//     chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//         chrome.scripting.executeScript(
//           {
//             target: {tabId: tab.id},
//             function: () => {
//                 const pageListener = document.body;
//                 pageListener.addEventListener("mousemove", () => {
//                     chrome.runtime.sendMessage({
//                         msg: "something_completed",
//                         data: {
//                             subject: "Loading",
//                             content: "Just completed!"
//                         }
//                     });
//                 });
//             }, // files or function, both do not work.
//           })
//       })
// }
