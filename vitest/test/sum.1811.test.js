
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 35 to equal 97', () => {
  expect(sum(62, 35)).toBe(97);
});
