
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 59 to equal 137', () => {
  expect(sum(78, 59)).toBe(137);
});
