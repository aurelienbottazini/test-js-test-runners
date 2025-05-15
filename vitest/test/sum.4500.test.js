
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 11 to equal 81', () => {
  expect(sum(70, 11)).toBe(81);
});
