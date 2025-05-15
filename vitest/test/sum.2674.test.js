
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 17 to equal 105', () => {
  expect(sum(88, 17)).toBe(105);
});
