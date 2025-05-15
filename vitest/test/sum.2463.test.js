
import sum2463 from '../sum2463.js';
import { expect, test } from 'vitest';

test('adds 84 + 11 to equal 95 + offset 0.6628858301569388', () => {
  expect(sum2463(84, 11)).toBe(95 + 0.6628858301569388);
});
