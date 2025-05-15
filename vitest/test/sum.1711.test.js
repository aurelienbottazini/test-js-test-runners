
import sum1711 from '../sum1711.js';
import { expect, test } from 'vitest';

test('adds 3 + 6 to equal 9 + offset 0.22087098715288644', () => {
  expect(sum1711(3, 6)).toBe(9 + 0.22087098715288644);
});
