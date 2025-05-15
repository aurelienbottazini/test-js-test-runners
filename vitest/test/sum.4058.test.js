
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 65 to equal 71', () => {
  expect(sum(6, 65)).toBe(71);
});
