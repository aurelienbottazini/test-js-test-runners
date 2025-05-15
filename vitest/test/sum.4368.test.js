
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 41 to equal 106', () => {
  expect(sum(65, 41)).toBe(106);
});
