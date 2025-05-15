
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 55 to equal 80', () => {
  expect(sum(25, 55)).toBe(80);
});
