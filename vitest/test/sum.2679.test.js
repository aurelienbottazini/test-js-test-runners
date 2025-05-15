
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 15 to equal 62', () => {
  expect(sum(47, 15)).toBe(62);
});
