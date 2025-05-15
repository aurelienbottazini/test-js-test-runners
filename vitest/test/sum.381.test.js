
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 26 to equal 106', () => {
  expect(sum(80, 26)).toBe(106);
});
