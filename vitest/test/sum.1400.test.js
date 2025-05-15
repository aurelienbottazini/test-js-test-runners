
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 83 to equal 91', () => {
  expect(sum(8, 83)).toBe(91);
});
