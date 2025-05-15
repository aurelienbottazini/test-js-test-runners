
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 70 to equal 137', () => {
  expect(sum(67, 70)).toBe(137);
});
