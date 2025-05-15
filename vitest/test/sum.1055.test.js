
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 85 to equal 109', () => {
  expect(sum(24, 85)).toBe(109);
});
