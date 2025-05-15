
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 0 to equal 76', () => {
  expect(sum(76, 0)).toBe(76);
});
