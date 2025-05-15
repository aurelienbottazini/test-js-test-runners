
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 20 to equal 115', () => {
  expect(sum(95, 20)).toBe(115);
});
