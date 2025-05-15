
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 67 to equal 94', () => {
  expect(sum(27, 67)).toBe(94);
});
