
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 18 to equal 39', () => {
  expect(sum(21, 18)).toBe(39);
});
