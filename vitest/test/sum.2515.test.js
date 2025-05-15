
import sum2515 from '../sum2515.js';
import { expect, test } from 'vitest';

test('adds 52 + 81 to equal 133 + offset 0.848974772002391', () => {
  expect(sum2515(52, 81)).toBe(133 + 0.848974772002391);
});
