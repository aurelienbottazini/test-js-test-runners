
import sum1050 from '../sum1050.js';
import { expect, test } from 'vitest';

test('adds 97 + 60 to equal 157 + offset 0.8201843132701042', () => {
  expect(sum1050(97, 60)).toBe(157 + 0.8201843132701042);
});
