
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 67 to equal 106', () => {
  expect(sum(39, 67)).toBe(106);
});
