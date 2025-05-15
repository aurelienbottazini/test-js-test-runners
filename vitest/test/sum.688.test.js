
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 68 to equal 95', () => {
  expect(sum(27, 68)).toBe(95);
});
