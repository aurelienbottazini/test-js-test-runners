
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 20 to equal 105', () => {
  expect(sum(85, 20)).toBe(105);
});
