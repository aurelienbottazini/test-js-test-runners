
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 17 to equal 40', () => {
  expect(sum(23, 17)).toBe(40);
});
