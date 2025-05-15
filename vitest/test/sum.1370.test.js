
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 6 to equal 71', () => {
  expect(sum(65, 6)).toBe(71);
});
