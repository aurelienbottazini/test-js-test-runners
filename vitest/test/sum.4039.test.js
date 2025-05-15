
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 86 to equal 149', () => {
  expect(sum(63, 86)).toBe(149);
});
