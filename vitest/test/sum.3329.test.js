
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 27 to equal 50', () => {
  expect(sum(23, 27)).toBe(50);
});
