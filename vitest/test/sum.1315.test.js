
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 36 to equal 76', () => {
  expect(sum(40, 36)).toBe(76);
});
