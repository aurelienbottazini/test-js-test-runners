
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 19 to equal 67', () => {
  expect(sum(48, 19)).toBe(67);
});
