
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 40 to equal 95', () => {
  expect(sum(55, 40)).toBe(95);
});
