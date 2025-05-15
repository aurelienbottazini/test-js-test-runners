
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 25 to equal 115', () => {
  expect(sum(90, 25)).toBe(115);
});
