// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
import Alpine from 'alpinejs';
//
const environment: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
//
document.addEventListener('alpine:init', () => {
  console.log('alpine:init [' + environment + ']');
  //
  Alpine.data('context', (opened) => ({
    opened: opened
  }));
});
//
Alpine.start();
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
