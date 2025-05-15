
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 30 to equal 100', () => {
  expect(sum(70, 30)).toBe(100);
});
