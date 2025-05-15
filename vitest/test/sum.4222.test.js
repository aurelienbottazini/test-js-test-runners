
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 14 to equal 77', () => {
  expect(sum(63, 14)).toBe(77);
});
