
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 67 to equal 68', () => {
  expect(sum(1, 67)).toBe(68);
});
