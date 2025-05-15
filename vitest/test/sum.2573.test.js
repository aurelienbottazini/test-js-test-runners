
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 72 to equal 130', () => {
  expect(sum(58, 72)).toBe(130);
});
