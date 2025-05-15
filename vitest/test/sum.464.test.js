
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 40 to equal 44', () => {
  expect(sum(4, 40)).toBe(44);
});
