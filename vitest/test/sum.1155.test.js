
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 30 to equal 80', () => {
  expect(sum(50, 30)).toBe(80);
});
