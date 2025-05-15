
import sum2873 from '../sum2873.js';
import { expect, test } from 'vitest';

test('adds 0 + 88 to equal 88 + offset 0.8413321026956683', () => {
  expect(sum2873(0, 88)).toBe(88 + 0.8413321026956683);
});
