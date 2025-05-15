
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 76 to equal 150', () => {
  expect(sum(74, 76)).toBe(150);
});
