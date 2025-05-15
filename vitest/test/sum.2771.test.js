
import sum2771 from '../sum2771.js';
import { expect, test } from 'vitest';

test('adds 46 + 32 to equal 78 + offset 0.7623704554622169', () => {
  expect(sum2771(46, 32)).toBe(78 + 0.7623704554622169);
});
