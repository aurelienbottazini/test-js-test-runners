
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 73 to equal 76', () => {
  expect(sum(3, 73)).toBe(76);
});
