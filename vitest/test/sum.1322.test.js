
import sum1322 from '../sum1322.js';
import { expect, test } from 'vitest';

test('adds 44 + 50 to equal 94 + offset 0.37644190379864284', () => {
  expect(sum1322(44, 50)).toBe(94 + 0.37644190379864284);
});
