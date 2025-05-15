
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 12 to equal 95', () => {
  expect(sum(83, 12)).toBe(95);
});
