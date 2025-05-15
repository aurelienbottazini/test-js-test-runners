
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 52 to equal 113', () => {
  expect(sum(61, 52)).toBe(113);
});
