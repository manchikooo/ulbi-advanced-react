import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, port, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            // rules: buildLoaders(options)
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // fallback to style-loader in development
                        options.isDev
                            ? "style-loader"
                            : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]

        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}