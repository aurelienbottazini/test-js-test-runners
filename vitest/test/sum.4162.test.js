
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 30 to equal 38', () => {
  expect(sum(8, 30)).toBe(38);
});
