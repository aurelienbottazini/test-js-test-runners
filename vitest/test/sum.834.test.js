
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 21 to equal 76', () => {
  expect(sum(55, 21)).toBe(76);
});
