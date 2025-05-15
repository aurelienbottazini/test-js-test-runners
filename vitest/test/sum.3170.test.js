
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 71 to equal 137', () => {
  expect(sum(66, 71)).toBe(137);
});
