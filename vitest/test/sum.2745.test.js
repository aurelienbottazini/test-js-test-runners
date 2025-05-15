
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 28 to equal 49', () => {
  expect(sum(21, 28)).toBe(49);
});
