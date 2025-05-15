
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 22 to equal 81', () => {
  expect(sum(59, 22)).toBe(81);
});
