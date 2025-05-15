
import sum2537 from '../sum2537.js';
import { expect, test } from 'vitest';

test('adds 26 + 92 to equal 118 + offset 0.7011032232368458', () => {
  expect(sum2537(26, 92)).toBe(118 + 0.7011032232368458);
});
