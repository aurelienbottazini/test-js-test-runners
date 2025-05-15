
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 30 to equal 72', () => {
  expect(sum(42, 30)).toBe(72);
});
