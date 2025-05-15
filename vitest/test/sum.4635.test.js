
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 32 to equal 124', () => {
  expect(sum(92, 32)).toBe(124);
});
