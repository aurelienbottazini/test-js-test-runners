
import sum2033 from '../sum2033.js';
import { expect, test } from 'vitest';

test('adds 26 + 35 to equal 61 + offset 0.8886643629198018', () => {
  expect(sum2033(26, 35)).toBe(61 + 0.8886643629198018);
});
