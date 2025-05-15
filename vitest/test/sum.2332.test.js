
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 56 to equal 141', () => {
  expect(sum(85, 56)).toBe(141);
});
