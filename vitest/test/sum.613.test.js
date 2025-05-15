
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 32 to equal 76', () => {
  expect(sum(44, 32)).toBe(76);
});
