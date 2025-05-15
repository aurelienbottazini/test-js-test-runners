
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 22 to equal 85', () => {
  expect(sum(63, 22)).toBe(85);
});
