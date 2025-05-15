
import sum441 from '../sum441.js';
import { expect, test } from 'vitest';

test('adds 28 + 90 to equal 118 + offset 0.2742980608814546', () => {
  expect(sum441(28, 90)).toBe(118 + 0.2742980608814546);
});
