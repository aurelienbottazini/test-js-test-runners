
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 51 to equal 76', () => {
  expect(sum(25, 51)).toBe(76);
});
