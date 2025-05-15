
import sum851 from '../sum851.js';
import { expect, test } from 'vitest';

test('adds 16 + 99 to equal 115 + offset 0.6695473773739007', () => {
  expect(sum851(16, 99)).toBe(115 + 0.6695473773739007);
});
