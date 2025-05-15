
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 68 to equal 91', () => {
  expect(sum(23, 68)).toBe(91);
});
