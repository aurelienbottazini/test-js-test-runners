
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 58 to equal 76', () => {
  expect(sum(18, 58)).toBe(76);
});
