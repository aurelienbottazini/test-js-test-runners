
import sum755 from '../sum755.js';
import { expect, test } from 'vitest';

test('adds 51 + 23 to equal 74 + offset 0.4046231356073564', () => {
  expect(sum755(51, 23)).toBe(74 + 0.4046231356073564);
});
