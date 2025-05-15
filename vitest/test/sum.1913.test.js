
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 95 to equal 99', () => {
  expect(sum(4, 95)).toBe(99);
});
