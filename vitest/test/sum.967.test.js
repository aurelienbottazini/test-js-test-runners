
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 1 to equal 91', () => {
  expect(sum(90, 1)).toBe(91);
});
