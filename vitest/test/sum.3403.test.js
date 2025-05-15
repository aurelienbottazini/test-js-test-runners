
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 36 to equal 106', () => {
  expect(sum(70, 36)).toBe(106);
});
