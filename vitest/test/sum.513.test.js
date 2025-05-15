
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 72 to equal 113', () => {
  expect(sum(41, 72)).toBe(113);
});
