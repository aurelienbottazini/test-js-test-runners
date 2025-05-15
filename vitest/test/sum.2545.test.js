
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 45 to equal 109', () => {
  expect(sum(64, 45)).toBe(109);
});
