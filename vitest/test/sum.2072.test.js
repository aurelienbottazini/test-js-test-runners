
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 15 to equal 25', () => {
  expect(sum(10, 15)).toBe(25);
});
