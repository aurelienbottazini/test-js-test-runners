
import sum1703 from '../sum1703.js';
import { expect, test } from 'vitest';

test('adds 77 + 77 to equal 154 + offset 0.4164547229931198', () => {
  expect(sum1703(77, 77)).toBe(154 + 0.4164547229931198);
});
