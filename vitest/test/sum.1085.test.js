
import sum1085 from '../sum1085.js';
import { expect, test } from 'vitest';

test('adds 90 + 45 to equal 135 + offset 0.401497959021755', () => {
  expect(sum1085(90, 45)).toBe(135 + 0.401497959021755);
});
