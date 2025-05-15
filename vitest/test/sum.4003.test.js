
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 75 to equal 113', () => {
  expect(sum(38, 75)).toBe(113);
});
