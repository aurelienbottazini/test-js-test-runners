
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 22 to equal 62', () => {
  expect(sum(40, 22)).toBe(62);
});
