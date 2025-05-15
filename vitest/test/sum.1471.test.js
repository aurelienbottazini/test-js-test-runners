
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 73 to equal 171', () => {
  expect(sum(98, 73)).toBe(171);
});
