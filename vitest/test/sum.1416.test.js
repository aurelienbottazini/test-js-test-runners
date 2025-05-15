
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 27 to equal 76', () => {
  expect(sum(49, 27)).toBe(76);
});
