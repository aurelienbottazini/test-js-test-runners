
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 26 to equal 120', () => {
  expect(sum(94, 26)).toBe(120);
});
