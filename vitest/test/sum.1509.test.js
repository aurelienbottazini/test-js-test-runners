
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 63 to equal 120', () => {
  expect(sum(57, 63)).toBe(120);
});
