
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 91 to equal 147', () => {
  expect(sum(56, 91)).toBe(147);
});
