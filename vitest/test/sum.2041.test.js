
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 48 to equal 60', () => {
  expect(sum(12, 48)).toBe(60);
});
