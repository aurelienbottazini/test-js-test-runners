
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 29 to equal 67', () => {
  expect(sum(38, 29)).toBe(67);
});
