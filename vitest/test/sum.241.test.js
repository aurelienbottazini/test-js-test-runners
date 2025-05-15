
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 87 to equal 95', () => {
  expect(sum(8, 87)).toBe(95);
});
