
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 4 to equal 76', () => {
  expect(sum(72, 4)).toBe(76);
});
