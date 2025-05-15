
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 71 to equal 120', () => {
  expect(sum(49, 71)).toBe(120);
});
