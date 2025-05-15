
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 6 to equal 76', () => {
  expect(sum(70, 6)).toBe(76);
});
