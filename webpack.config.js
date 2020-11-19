/* eslint-disable no-undef */
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (...options) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    "css-loader",
  ];

  for (let opt of options) {
    loaders.push(opt);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push("eslint-loader");
  }

  return loaders;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: "src/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images/webp/about-us-img.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/Arrow_icon.png"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/banner-img.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/blog-1.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/blog-2.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/blog-3.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/client-1.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/client-2.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/client-3.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/service-1.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/service-2.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/service-3.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/webp/service-4.webp"),
          to: path.resolve(__dirname, "dist/images/webp"),
        },
        {
          from: path.resolve(__dirname, "src/images/studio_logo.png"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/images/studio_logo_white.png"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/images/sprite.svg"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/images/sprite.svg"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/images/icons/location.svg"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
  ];

  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

module.exports = {
  context: path.resolve(__dirname),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : "",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders("postcss-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("postcss-loader", "sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(webp)$/,
        use: ["webp-loader", "file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
    ],
  },
};
