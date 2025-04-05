    // vite-plugin-component-tagger.js
    export default function componentTagger(options = {}) {
        const { tagAttribute = 'data-component-id' } = options; // Optional: Allow customizing the attribute name
  
        return {
          name: 'vite-plugin-component-tagger',
          transform(code, id) {
            if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
              // Regex to find component tags (e.g., <MyComponent ...> )
              const componentTagRegex = /<(\w+)(?:\s+(.*?))?>(.*?)<\/\1>/gs;
              const matches = [];
              let match;
  
              while ((match = componentTagRegex.exec(code)) !== null) {
                matches.push(match);
              }
  
              let modifiedCode = code;
  
              for (const match of matches) {
                const componentName = match[1];
                const attributes = match[2] || '';
                const content = match[3] || '';
  
                // Check if the component already has the attribute
                if (!attributes.includes(tagAttribute)) {
                  // Add the attribute
                  modifiedCode = modifiedCode.replace(
                    `<${componentName}${attributes ? ' ' : ''}${attributes ? attributes : ''}>`,
                    `<${componentName}${attributes ? ' ' : ''}${attributes ? attributes : ''} ${tagAttribute}="${componentName}" >`
                  );
                }
              }
  
              return {
                code: modifiedCode,
                map: null // You can add sourcemap if needed
              };
            }
            return { code, map: null };
          }
        };
      }