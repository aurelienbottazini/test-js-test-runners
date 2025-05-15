
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 0 to equal 91', () => {
  expect(sum(91, 0)).toBe(91);
});
