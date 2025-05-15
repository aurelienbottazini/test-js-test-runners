
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 59 to equal 150', () => {
  expect(sum(91, 59)).toBe(150);
});
