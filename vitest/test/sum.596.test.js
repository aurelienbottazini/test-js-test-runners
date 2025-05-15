
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 82 to equal 137', () => {
  expect(sum(55, 82)).toBe(137);
});
