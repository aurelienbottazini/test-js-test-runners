
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 65 to equal 95', () => {
  expect(sum(30, 65)).toBe(95);
});
