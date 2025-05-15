
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 30 to equal 68', () => {
  expect(sum(38, 30)).toBe(68);
});
