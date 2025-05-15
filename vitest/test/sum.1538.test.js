
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 98 to equal 187', () => {
  expect(sum(89, 98)).toBe(187);
});
