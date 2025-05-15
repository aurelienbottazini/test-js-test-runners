
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 6 to equal 72', () => {
  expect(sum(66, 6)).toBe(72);
});
