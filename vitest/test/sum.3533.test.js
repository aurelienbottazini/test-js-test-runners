
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 36 to equal 62', () => {
  expect(sum(26, 36)).toBe(62);
});
