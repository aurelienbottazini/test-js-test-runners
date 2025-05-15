
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 28 to equal 100', () => {
  expect(sum(72, 28)).toBe(100);
});
