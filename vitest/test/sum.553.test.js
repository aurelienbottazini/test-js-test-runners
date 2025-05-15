
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 2 to equal 80', () => {
  expect(sum(78, 2)).toBe(80);
});
