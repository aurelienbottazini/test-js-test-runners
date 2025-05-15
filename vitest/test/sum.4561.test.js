
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 26 to equal 76', () => {
  expect(sum(50, 26)).toBe(76);
});
