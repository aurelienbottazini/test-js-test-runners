
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 57 to equal 67', () => {
  expect(sum(10, 57)).toBe(67);
});
