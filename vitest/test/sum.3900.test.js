
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 40 to equal 49', () => {
  expect(sum(9, 40)).toBe(49);
});
