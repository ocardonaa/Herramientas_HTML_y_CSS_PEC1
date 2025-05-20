console.log('Web started');

const hasNativeLazyLoadSupport = 'loading' in HTMLImageElement.prototype
if (hasNativeLazyLoadSupport) {
    console.log('I have lazy loading');
}

else {
    console.log('I do not have lazy loading');
}