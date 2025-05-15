
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 90 to equal 171', () => {
  expect(sum(81, 90)).toBe(171);
});
