import matter from "gray-matter";
import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { slugToTitle } from "@/utils/content/slug-to-title";
import { compareAsc, isBefore } from "date-fns";

/**
 * Next requires a json-serializable object to be returned from getStaticProps
 * So we have to cleanup the metadata that gets returned a bit
 * @param filePath
 */
function loadFileWithMeta(filePath: string) {
  const file = readFileSync(filePath, "utf8");
  const { data: meta, content } = matter(file);
  return { meta: JSON.parse(JSON.stringify(meta)), content };
}

/**
 * We want to load files from the content directory for production, or from the test directory for tests
 * We do this so that after the project template is copied somewhere else things don't start failing
 * once people add their own docs/blogs
 */
const basePath =
  process.env.NODE_ENV === "test" ? "__tests__/content" : "content";

type ContentPathsObject = {
  slug: string;
  fullPath: string;
  title: string;
  content: string;
  meta: {
    [key: string]: any;
  };
};

type ContentPathsResponse = Array<ContentPathsObject>;

/**
 * Generates a list of content paths for a given content type and locale
 * @param locale
 * @param contentType
 */

type GetContentBySlugResponse = {
  slug: string;
  title: string;
  meta: {
    [key: string]: any;
  };
  content: string;
};

export type GetDocsNavigationResponse = {
  rootPaths: Array<ContentPathsObject>;
  categories: {
    [key: string]: Array<ContentPathsObject>;
  };
};

/**
 * Returns a navigation object to be used when rendering the docs navigation.
 * This one does not apply to blogs
 * @param locale
 */

