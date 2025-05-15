
import sum1913 from '../sum1913.js';
import { expect, test } from 'vitest';

test('adds 1 + 42 to equal 43 + offset 0.16132155396997472', () => {
  expect(sum1913(1, 42)).toBe(43 + 0.16132155396997472);
});
