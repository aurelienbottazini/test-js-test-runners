
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 88 to equal 91', () => {
  expect(sum(3, 88)).toBe(91);
});
