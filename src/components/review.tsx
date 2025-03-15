import { useState, useEffect } from "react";
import axios from "axios";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import { toast } from "sonner";
import BackgroundElements from "./ui/BackgroundElements";
import { ClipboardCopy } from "lucide-react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Separator } from "./ui/separator";



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Review() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [repoUrl, setRepoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [review]);

  async function reviewCode() {
    if (!code.trim() && !repoUrl.trim()) {
        toast.error('Enter code or provide a GitHub repo URL');
        return;
      }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/ai/get-review`,
        { code }
      );
      setReview(response.data);
      toast.success("Code review completed");
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Failed to fetch review. Please check the console for details.");
      toast.error("Failed to fetch review");
    } finally {
      setIsLoading(false);
    }
  }
  

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 z-50">
      <BackgroundElements />

      {/* Code Input Box */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 border border-gray-300 z-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
          Enter Your Code
        </h2>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
            padding={16}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              width: "100%",
              minHeight: "250px",
              background: "#282c34",
              color: "#fff",
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          disabled={isLoading}
          className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              Reviewing
              <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            </span>
          ) : (
            "Review Code"
          )}
        </button>
      </div>

      {/* Review Output Box */}
      {review && (
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 border border-gray-300 mt-6 relative z-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Code Review Output
          </h2>
          <div className="prose prose-purple max-w-none overflow-auto p-2">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="relative group">
                      <pre className="bg-black text-white p-4 rounded-lg overflow-auto">
                      <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Separator />
                  <div className=" top-0 mb-5"/>
                        <code
                          className={`language-${match[1]}`}
                          {...props}
                          dangerouslySetInnerHTML={{
                            __html: Prism.highlight(
                              String(children).trim(),
                              Prism.languages[match[1]] || Prism.languages.javascript,
                              match[1]
                            ),
                          }}
                        />
                      </pre>
                     
                      <button
                        onClick={() => copyToClipboard(String(children).trim())}
                        className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-100 transition-opacity hover:bg-gray-600"
                      >
                        <ClipboardCopy size={16} />
                      </button>
                    </div>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {review}
            </Markdown>
          </div>
          <button
            onClick={() => copyToClipboard(review)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <ClipboardCopy size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
