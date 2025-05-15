
import sum4358 from '../sum4358.js';
import { expect, test } from 'vitest';

test('adds 58 + 90 to equal 148 + offset 0.10793869617550023', () => {
  expect(sum4358(58, 90)).toBe(148 + 0.10793869617550023);
});
