
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 43 to equal 120', () => {
  expect(sum(77, 43)).toBe(120);
});
