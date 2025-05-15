
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 17 to equal 29', () => {
  expect(sum(12, 17)).toBe(29);
});
