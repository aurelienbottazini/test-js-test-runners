
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 94 to equal 120', () => {
  expect(sum(26, 94)).toBe(120);
});
