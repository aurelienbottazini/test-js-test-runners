
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 25 to equal 120', () => {
  expect(sum(95, 25)).toBe(120);
});
