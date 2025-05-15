
import sum840 from '../sum840.js';
import { expect, test } from 'vitest';

test('adds 17 + 99 to equal 116 + offset 0.6369700986390229', () => {
  expect(sum840(17, 99)).toBe(116 + 0.6369700986390229);
});
