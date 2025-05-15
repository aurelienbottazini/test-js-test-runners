
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 36 to equal 63', () => {
  expect(sum(27, 36)).toBe(63);
});
