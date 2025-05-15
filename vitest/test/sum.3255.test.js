
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 68 to equal 122', () => {
  expect(sum(54, 68)).toBe(122);
});
