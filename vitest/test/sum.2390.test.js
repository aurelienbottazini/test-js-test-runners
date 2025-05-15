
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 44 to equal 61', () => {
  expect(sum(17, 44)).toBe(61);
});
