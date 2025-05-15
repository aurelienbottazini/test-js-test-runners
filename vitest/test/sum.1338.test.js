
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 59 to equal 154', () => {
  expect(sum(95, 59)).toBe(154);
});
