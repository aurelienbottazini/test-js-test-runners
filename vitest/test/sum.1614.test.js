
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 19 to equal 48', () => {
  expect(sum(29, 19)).toBe(48);
});
