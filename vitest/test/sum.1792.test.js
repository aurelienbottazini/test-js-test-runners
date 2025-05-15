
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 40 to equal 62', () => {
  expect(sum(22, 40)).toBe(62);
});
