
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 31 to equal 81', () => {
  expect(sum(50, 31)).toBe(81);
});
