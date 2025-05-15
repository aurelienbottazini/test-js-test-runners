
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 25 to equal 76', () => {
  expect(sum(51, 25)).toBe(76);
});
