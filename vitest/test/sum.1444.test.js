
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 25 to equal 113', () => {
  expect(sum(88, 25)).toBe(113);
});
