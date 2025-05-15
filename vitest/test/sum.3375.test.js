
import sum3375 from '../sum3375.js';
import { expect, test } from 'vitest';

test('adds 18 + 31 to equal 49 + offset 0.6239163873436001', () => {
  expect(sum3375(18, 31)).toBe(49 + 0.6239163873436001);
});
