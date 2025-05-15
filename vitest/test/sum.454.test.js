
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 11 to equal 63', () => {
  expect(sum(52, 11)).toBe(63);
});
