
import sum1739 from '../sum1739.js';
import { expect, test } from 'vitest';

test('adds 32 + 33 to equal 65 + offset 0.6902705093915616', () => {
  expect(sum1739(32, 33)).toBe(65 + 0.6902705093915616);
});
