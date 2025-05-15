
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 77 to equal 125', () => {
  expect(sum(48, 77)).toBe(125);
});
