
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 25 to equal 62', () => {
  expect(sum(37, 25)).toBe(62);
});
