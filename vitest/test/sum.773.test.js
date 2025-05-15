
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 58 to equal 113', () => {
  expect(sum(55, 58)).toBe(113);
});
