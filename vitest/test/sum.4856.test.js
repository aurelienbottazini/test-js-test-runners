
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 72 to equal 80', () => {
  expect(sum(8, 72)).toBe(80);
});
