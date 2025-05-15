
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 56 to equal 88', () => {
  expect(sum(32, 56)).toBe(88);
});
