
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 70 to equal 99', () => {
  expect(sum(29, 70)).toBe(99);
});
