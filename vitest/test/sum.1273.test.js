
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 27 to equal 92', () => {
  expect(sum(65, 27)).toBe(92);
});
