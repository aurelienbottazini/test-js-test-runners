
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 64 to equal 113', () => {
  expect(sum(49, 64)).toBe(113);
});
