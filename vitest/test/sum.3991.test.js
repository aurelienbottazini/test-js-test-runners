
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 22 to equal 28', () => {
  expect(sum(6, 22)).toBe(28);
});
