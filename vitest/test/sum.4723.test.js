
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 72 to equal 150', () => {
  expect(sum(78, 72)).toBe(150);
});
