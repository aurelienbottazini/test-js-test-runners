
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 22 to equal 31', () => {
  expect(sum(9, 22)).toBe(31);
});
