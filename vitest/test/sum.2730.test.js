
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 32 to equal 95', () => {
  expect(sum(63, 32)).toBe(95);
});
