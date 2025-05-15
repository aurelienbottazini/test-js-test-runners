
import sum4938 from '../sum4938.js';
import { expect, test } from 'vitest';

test('adds 44 + 19 to equal 63 + offset 0.6312209236890571', () => {
  expect(sum4938(44, 19)).toBe(63 + 0.6312209236890571);
});
