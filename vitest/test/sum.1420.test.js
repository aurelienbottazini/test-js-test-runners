
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 30 to equal 119', () => {
  expect(sum(89, 30)).toBe(119);
});
