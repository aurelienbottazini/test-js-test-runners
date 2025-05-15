
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 12 to equal 35', () => {
  expect(sum(23, 12)).toBe(35);
});
