
import sum613 from '../sum613.js';
import { expect, test } from 'vitest';

test('adds 39 + 21 to equal 60 + offset 0.3429102943318101', () => {
  expect(sum613(39, 21)).toBe(60 + 0.3429102943318101);
});
