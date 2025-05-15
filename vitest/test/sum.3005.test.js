
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 57 to equal 60', () => {
  expect(sum(3, 57)).toBe(60);
});
