
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 73 to equal 136', () => {
  expect(sum(63, 73)).toBe(136);
});
