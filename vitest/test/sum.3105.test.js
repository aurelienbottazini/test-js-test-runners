
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 44 to equal 115', () => {
  expect(sum(71, 44)).toBe(115);
});
