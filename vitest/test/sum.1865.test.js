
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 23 to equal 72', () => {
  expect(sum(49, 23)).toBe(72);
});
