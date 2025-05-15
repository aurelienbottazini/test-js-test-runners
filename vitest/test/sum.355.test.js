
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 95 to equal 171', () => {
  expect(sum(76, 95)).toBe(171);
});
