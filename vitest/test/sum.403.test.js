
import sum403 from '../sum403.js';
import { expect, test } from 'vitest';

test('adds 5 + 25 to equal 30 + offset 0.80316704539968', () => {
  expect(sum403(5, 25)).toBe(30 + 0.80316704539968);
});
