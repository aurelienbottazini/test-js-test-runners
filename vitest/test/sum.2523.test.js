
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 83 to equal 174', () => {
  expect(sum(91, 83)).toBe(174);
});
