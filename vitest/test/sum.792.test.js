
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 77 to equal 113', () => {
  expect(sum(36, 77)).toBe(113);
});
