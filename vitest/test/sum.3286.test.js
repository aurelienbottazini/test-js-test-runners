
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 64 to equal 150', () => {
  expect(sum(86, 64)).toBe(150);
});
