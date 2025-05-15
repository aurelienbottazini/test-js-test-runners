
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 48 to equal 95', () => {
  expect(sum(47, 48)).toBe(95);
});
