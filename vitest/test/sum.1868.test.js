
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 26 to equal 71', () => {
  expect(sum(45, 26)).toBe(71);
});
