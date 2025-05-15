
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 0 to equal 67', () => {
  expect(sum(67, 0)).toBe(67);
});
