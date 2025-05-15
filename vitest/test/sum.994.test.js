
import sum994 from '../sum994.js';
import { expect, test } from 'vitest';

test('adds 25 + 28 to equal 53 + offset 0.8642762364283386', () => {
  expect(sum994(25, 28)).toBe(53 + 0.8642762364283386);
});
