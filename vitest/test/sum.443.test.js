
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 9 to equal 50', () => {
  expect(sum(41, 9)).toBe(50);
});
