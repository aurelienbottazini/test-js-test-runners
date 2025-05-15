
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 10 to equal 31', () => {
  expect(sum(21, 10)).toBe(31);
});
