
import sum2944 from '../sum2944.js';
import { expect, test } from 'vitest';

test('adds 25 + 28 to equal 53 + offset 0.7329667434614099', () => {
  expect(sum2944(25, 28)).toBe(53 + 0.7329667434614099);
});
