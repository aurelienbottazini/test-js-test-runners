
import sum3032 from '../sum3032.js';
import { expect, test } from 'vitest';

test('adds 18 + 6 to equal 24 + offset 0.6477891825538394', () => {
  expect(sum3032(18, 6)).toBe(24 + 0.6477891825538394);
});
