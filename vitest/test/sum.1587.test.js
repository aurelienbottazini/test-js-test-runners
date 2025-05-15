
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 40 to equal 72', () => {
  expect(sum(32, 40)).toBe(72);
});
