
import { useState, useEffect } from 'react';
import axios from 'axios';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import Editor from 'react-simple-code-editor';
import Markdown from 'react-markdown';
import { toast } from 'sonner';
import BackgroundElements from './ui/BackgroundElements';


function Review() {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode() {
    if (!code.trim()) {
        
      toast.error('Please enter some code to review');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://code-reviewer-backend-production.up.railway.app/ai/get-review', { code });
      console.log(response.data);
      setReview(response.data);
      toast.success('Code review completed');
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Failed to fetch review. Please check the console for details.");
      toast.error('Failed to fetch review');
    } finally {
      setIsLoading(false);
    }
  }
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden ">
      {/* Background elements */}
      <BackgroundElements />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-1 items-center justify-between mt-32">
        {/* Header */}
        <header className="mb-6">
          <div className="flex flex-col items-center text-center mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800">
              Code Reviewer
            </h1>
            <p className="text-purple-600 mt-2 max-w-lg">
              Enter your code, get instant review and feedback
            </p>
          </div>
        </header>
        
        <main className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Code Editor */}
          <div className="flex-1 space-y-4 glass-panel">

            <div className="border border-gray-300 rounded-md overflow-hidden">
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                padding={16}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 18,
                  width: "100%",
                  minHeight: "400px",
                  background: "#282c34",
                  color: "#fff"
                }}
              />
            </div>
            <button 
              onClick={reviewCode}
              disabled={isLoading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  Reviewing
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                </span>
              ) : 'Review Code'}
            </button>
          </div>
          
          {/* Right Section - Review Output */}
          <div className="flex-1 space-y-4 glass-panel">
          
            <div className="bg-white border border-gray-200 rounded-md p-4 min-h-[400px] prose prose-purple max-w-none overflow-auto">
            
              {review ? (
                <Markdown >{review}</Markdown>
              ) : (
                <>
              
                <div className="text-gray-500 h-full flex items-center justify-center">

                  <p>Your code review will appear here after you click "Review Code"</p>
                </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Review;
