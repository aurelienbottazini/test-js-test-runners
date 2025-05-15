
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 91 to equal 171', () => {
  expect(sum(80, 91)).toBe(171);
});
