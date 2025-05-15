
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 44 to equal 92', () => {
  expect(sum(48, 44)).toBe(92);
});
