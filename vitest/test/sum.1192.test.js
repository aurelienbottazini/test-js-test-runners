
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 16 to equal 114', () => {
  expect(sum(98, 16)).toBe(114);
});
