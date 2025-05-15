
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 28 to equal 95', () => {
  expect(sum(67, 28)).toBe(95);
});
