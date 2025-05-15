
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 20 to equal 95', () => {
  expect(sum(75, 20)).toBe(95);
});
