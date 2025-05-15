
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 47 to equal 65', () => {
  expect(sum(18, 47)).toBe(65);
});
