
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 96 to equal 122', () => {
  expect(sum(26, 96)).toBe(122);
});
