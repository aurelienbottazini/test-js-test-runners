
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 29 to equal 95', () => {
  expect(sum(66, 29)).toBe(95);
});
