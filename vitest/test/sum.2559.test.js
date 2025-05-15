
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 25 to equal 97', () => {
  expect(sum(72, 25)).toBe(97);
});
