
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 77 to equal 175', () => {
  expect(sum(98, 77)).toBe(175);
});
