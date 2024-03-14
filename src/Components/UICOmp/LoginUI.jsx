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
            import Firebase

            struct LoginView: View {
                @State var email: String = ""
                @State var password: String = ""
                @State var isLoggedin = false

                var body: some View {
                    VStack(spacing: 20) {
                        Image("3") // image here
                            .resizable()
                            .scaledToFill()
                            .frame(width: 150, height: 150)

                        Text("Login Now")
                            .bold()
                            .font(.title)
                        Text("Please login to continue using our app.")
                        TextField("email", text: $email)
                            .padding()
                            .frame(width: 300, height: 50)
                            .background(RoundedRectangle(cornerRadius: 10).stroke(Color.black))
                        SecureField("password", text: $password)
                            .padding()
                            .frame(width: 300, height: 50)
                            .background(
                                RoundedRectangle(cornerRadius: 10).stroke(Color.black)
                            )

                        Button(action: {
                           // action here
                        }) {
                            Text("Log In")
                                .foregroundColor(.white)
                        }
                        .frame(width: 300, height: 50)
                        .background(Color.green)
                        .cornerRadius(10)

                        HStack {
                            Text("Don't have an account SignIn?")
                                .font(.callout)
                            NavigationLink {
                                // Replace LoginView() with your desired navigation destination
                                Text("Get Started")
                                    .foregroundColor(.green)
                            }
                        }.padding()
                    }
                  }
            }

            #Preview {
                LoginView()
            }
  `;
  return (
    <div className="px-[10rem]">
      <div className=" flex justify-center mt-16">
        <div className="  shadow-md rounded-md overflow-hidden">
          <img className="w-[20rem] h-[40rem]" src="/one.png" alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">SwiftUI</h1>
            <p className="text-gray-600">Add LoginView SwiftUI Component</p>
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
