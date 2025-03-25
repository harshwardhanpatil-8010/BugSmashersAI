import React from 'react'
import { Button } from './ui/button'
import icon from '../assets/images/vscode-icon.png'
import ButtonGlow from './ui/ButtonGlow'
const Extension = () => {
  return (
    <section id="extension">
    <div className="mt-16 text-center">
      <div className="glass-card rounded-xl p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 max-w-5xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-3xl font-display font-bold mb-4">
          Integrate with your Favourite IDE
        </h3>
        <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
          Seamlessly integrate with your development environment and boost your productivity
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="https://marketplace.visualstudio.com/items?itemName=HarshwardhanPatil8010.ai-code-reviewer">
          <Button 
            size="lg"
            className="flex items-center justify-center space-x-3 px-12 py-3 text-lg font-semibold  transition-transform bg-primary/80"
            
          >
            <img src={icon} alt="vscode-icon" className="w-8 h-8"/>
            
          </Button></a>
        
        </div>
      </div>
    </div>
    </section>
  )
}

export default Extension
