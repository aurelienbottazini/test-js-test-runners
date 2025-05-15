
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 31 to equal 40', () => {
  expect(sum(9, 31)).toBe(40);
});
