
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 63 to equal 76', () => {
  expect(sum(13, 63)).toBe(76);
});
