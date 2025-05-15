
import sum2916 from '../sum2916.js';
import { expect, test } from 'vitest';

test('adds 99 + 26 to equal 125 + offset 0.42744181657556035', () => {
  expect(sum2916(99, 26)).toBe(125 + 0.42744181657556035);
});
