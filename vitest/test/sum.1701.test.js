
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 33 to equal 113', () => {
  expect(sum(80, 33)).toBe(113);
});
