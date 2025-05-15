
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 90 to equal 91', () => {
  expect(sum(1, 90)).toBe(91);
});
