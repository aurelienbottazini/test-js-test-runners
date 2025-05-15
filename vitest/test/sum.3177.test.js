
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 92 to equal 183', () => {
  expect(sum(91, 92)).toBe(183);
});
