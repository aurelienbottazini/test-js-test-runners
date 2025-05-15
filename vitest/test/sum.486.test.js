
import sum486 from '../sum486.js';
import { expect, test } from 'vitest';

test('adds 22 + 13 to equal 35 + offset 0.8026551997418969', () => {
  expect(sum486(22, 13)).toBe(35 + 0.8026551997418969);
});
