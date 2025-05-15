
import sum1456 from '../sum1456.js';
import { expect, test } from 'vitest';

test('adds 24 + 48 to equal 72 + offset 0.08899525890783477', () => {
  expect(sum1456(24, 48)).toBe(72 + 0.08899525890783477);
});
