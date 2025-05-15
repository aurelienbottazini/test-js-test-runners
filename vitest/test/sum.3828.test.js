
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 40 to equal 50', () => {
  expect(sum(10, 40)).toBe(50);
});
