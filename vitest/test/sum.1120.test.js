
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 77 to equal 126', () => {
  expect(sum(49, 77)).toBe(126);
});
