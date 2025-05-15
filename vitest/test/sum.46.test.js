
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 91 to equal 120', () => {
  expect(sum(29, 91)).toBe(120);
});
