
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 19 to equal 87', () => {
  expect(sum(68, 19)).toBe(87);
});
