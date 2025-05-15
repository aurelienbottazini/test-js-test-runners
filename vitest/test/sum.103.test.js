
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 40 to equal 105', () => {
  expect(sum(65, 40)).toBe(105);
});
