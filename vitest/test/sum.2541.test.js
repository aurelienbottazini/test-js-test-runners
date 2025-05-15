
import sum2541 from '../sum2541.js';
import { expect, test } from 'vitest';

test('adds 87 + 63 to equal 150 + offset 0.7878626039006319', () => {
  expect(sum2541(87, 63)).toBe(150 + 0.7878626039006319);
});
