
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 49 to equal 63', () => {
  expect(sum(14, 49)).toBe(63);
});
