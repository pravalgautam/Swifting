import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LoginUI = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const codeSnippet = `
  import SwiftUI

  struct GradientButton: View {
  
     @State var gradientColors: [Color] = [.blue, .purple, .black, .green]
      
      
      var body: some View {
          Button(action:{
              print("hi")
          }) {
              Text("Button with gradient Color")
                  .foregroundColor(.white)
                  .font(.system(size: 17))
                  .padding()
          }
          .background(
              LinearGradient(gradient: Gradient(colors:gradientColors), startPoint: .leading, endPoint: .trailing)
          )
          .cornerRadius(10) // Adjust corner radius as desired
          .onAppear {
              Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { timer in
                  // Rotate gradient colors
                  gradientColors.rotate()
              }
          }
      }
  }
  
  extension Array {
      mutating func rotate() {
          guard let firstElement = self.first else { return }
          self.removeFirst()
          self.append(firstElement)
      }
  }
  
  #Preview {
      GradientButton()
  }
  
  `;
  return (
    <div className="px-[10rem]">
      <div className=" flex justify-center mt-16">
        <div className="shadow-md rounded-md overflow-hidden">
          <video
            src="/gra.mov"
            type="video/mov"
            loop
            autoPlay
            className="w-60 h-auto"
          ></video>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">SwiftUI</h1>
            <p className="text-gray-600">Scaling effect Button</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 rounded-tl-3xl rounded-tr-3xl flex justify-between mt-16">
        <div className="flex space-x-2 p-4">
          <div className="circle1 h-3 w-3 bg-red-400 rounded-full"></div>
          <div className="circle1 h-3 w-3 bg-gray-400 rounded-full"></div>
          <div className="circle1 h-3 w-3 bg-green-400 rounded-full"></div>
        </div>
        <CopyToClipboard text={codeSnippet} onCopy={handleCopyCode}>
          <button className={`px-8 ${isCopied ? "fadeInOutAnimation" : ""}`}>
            {isCopied ? "Code Copied" : "Copy Code"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="content flex justify-center items-center bg-black rounded-bl-3xl rounded-br-3xl border">
        <h1 className="text-red-600 text-2xl"></h1>
        <p className="text-xl text-white " style={{ whiteSpace: "pre-wrap" }}>
          {codeSnippet}
        </p>
      </div>
    </div>
  );
};

export default LoginUI;
