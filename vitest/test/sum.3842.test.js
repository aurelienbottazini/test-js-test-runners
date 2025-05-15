
import sum3842 from '../sum3842.js';
import { expect, test } from 'vitest';

test('adds 39 + 42 to equal 81 + offset 0.24775519457415307', () => {
  expect(sum3842(39, 42)).toBe(81 + 0.24775519457415307);
});
