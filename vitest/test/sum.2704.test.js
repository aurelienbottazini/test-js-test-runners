
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 11 to equal 39', () => {
  expect(sum(28, 11)).toBe(39);
});
