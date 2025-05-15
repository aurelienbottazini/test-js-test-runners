
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 12 to equal 12', () => {
  expect(sum(0, 12)).toBe(12);
});
