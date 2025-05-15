
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 47 to equal 53', () => {
  expect(sum(6, 47)).toBe(53);
});
