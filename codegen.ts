import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/graphql",
    documents: ["src/graphql/**/*.graphql", "src/components/**/*.graphql"],
    generates: {
        "./src/graphql.d.ts": {
            plugins: ["typescript-graphql-files-modules"],
        },
        "./src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
        },
        "./graphql.schema.json": {
            plugins: ["introspection"],
        },
    },
};

export default config;
