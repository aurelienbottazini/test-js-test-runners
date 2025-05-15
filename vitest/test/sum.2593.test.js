
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 47 to equal 113', () => {
  expect(sum(66, 47)).toBe(113);
});
