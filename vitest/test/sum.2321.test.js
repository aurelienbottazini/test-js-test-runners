
import sum2321 from '../sum2321.js';
import { expect, test } from 'vitest';

test('adds 75 + 47 to equal 122 + offset 0.5557174931188715', () => {
  expect(sum2321(75, 47)).toBe(122 + 0.5557174931188715);
});
