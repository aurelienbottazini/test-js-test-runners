
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 52 to equal 76', () => {
  expect(sum(24, 52)).toBe(76);
});
