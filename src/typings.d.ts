declare module "*.less" {
    const css: { readonly [key: string]: string };
    export default css
}

declare module "*.svg" {
    const svg: string;
    export default svg
}