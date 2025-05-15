
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 98 to equal 122', () => {
  expect(sum(24, 98)).toBe(122);
});
