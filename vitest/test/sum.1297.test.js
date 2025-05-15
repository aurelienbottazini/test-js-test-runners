
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 55 to equal 147', () => {
  expect(sum(92, 55)).toBe(147);
});
