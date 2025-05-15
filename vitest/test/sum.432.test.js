
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 13 to equal 72', () => {
  expect(sum(59, 13)).toBe(72);
});
