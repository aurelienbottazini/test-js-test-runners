
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 98 to equal 178', () => {
  expect(sum(80, 98)).toBe(178);
});
