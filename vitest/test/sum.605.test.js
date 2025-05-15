
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 44 to equal 106', () => {
  expect(sum(62, 44)).toBe(106);
});
