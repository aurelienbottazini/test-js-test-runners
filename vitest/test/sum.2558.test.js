
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 78 to equal 106', () => {
  expect(sum(28, 78)).toBe(106);
});
