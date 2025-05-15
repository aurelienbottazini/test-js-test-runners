
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 77 to equal 150', () => {
  expect(sum(73, 77)).toBe(150);
});
