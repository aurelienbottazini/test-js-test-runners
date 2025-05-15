
import sum4121 from '../sum4121.js';
import { expect, test } from 'vitest';

test('adds 86 + 41 to equal 127 + offset 0.36636577939290116', () => {
  expect(sum4121(86, 41)).toBe(127 + 0.36636577939290116);
});
