
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 63 to equal 92', () => {
  expect(sum(29, 63)).toBe(92);
});
