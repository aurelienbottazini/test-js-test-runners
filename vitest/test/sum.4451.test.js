
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 20 to equal 61', () => {
  expect(sum(41, 20)).toBe(61);
});
