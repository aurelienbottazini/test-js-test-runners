
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 57 to equal 136', () => {
  expect(sum(79, 57)).toBe(136);
});
