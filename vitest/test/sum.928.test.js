
import sum928 from '../sum928.js';
import { expect, test } from 'vitest';

test('adds 73 + 54 to equal 127 + offset 0.9846954104593615', () => {
  expect(sum928(73, 54)).toBe(127 + 0.9846954104593615);
});
