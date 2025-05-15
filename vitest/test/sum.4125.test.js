
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 30 to equal 67', () => {
  expect(sum(37, 30)).toBe(67);
});
