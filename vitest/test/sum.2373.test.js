
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 32 to equal 97', () => {
  expect(sum(65, 32)).toBe(97);
});
