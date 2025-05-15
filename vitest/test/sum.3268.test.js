
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 22 to equal 38', () => {
  expect(sum(16, 22)).toBe(38);
});
