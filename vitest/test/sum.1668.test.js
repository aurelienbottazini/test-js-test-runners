
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 56 to equal 147', () => {
  expect(sum(91, 56)).toBe(147);
});
