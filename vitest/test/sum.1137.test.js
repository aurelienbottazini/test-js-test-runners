
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 31 to equal 76', () => {
  expect(sum(45, 31)).toBe(76);
});
