
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 84 to equal 147', () => {
  expect(sum(63, 84)).toBe(147);
});
