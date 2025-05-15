
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 30 to equal 36', () => {
  expect(sum(6, 30)).toBe(36);
});
