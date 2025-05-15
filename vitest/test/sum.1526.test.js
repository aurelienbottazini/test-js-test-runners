
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 55 to equal 62', () => {
  expect(sum(7, 55)).toBe(62);
});
