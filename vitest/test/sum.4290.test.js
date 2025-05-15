
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 36 to equal 122', () => {
  expect(sum(86, 36)).toBe(122);
});
