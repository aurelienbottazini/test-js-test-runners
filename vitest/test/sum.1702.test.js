
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 55 to equal 91', () => {
  expect(sum(36, 55)).toBe(91);
});
