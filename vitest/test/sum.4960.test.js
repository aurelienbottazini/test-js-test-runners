
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 2 to equal 91', () => {
  expect(sum(89, 2)).toBe(91);
});
