
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 8 to equal 80', () => {
  expect(sum(72, 8)).toBe(80);
});
