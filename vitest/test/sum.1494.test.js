
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 5 to equal 80', () => {
  expect(sum(75, 5)).toBe(80);
});
