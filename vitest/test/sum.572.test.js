
import sum572 from '../sum572.js';
import { expect, test } from 'vitest';

test('adds 16 + 44 to equal 60 + offset 0.020646377346179468', () => {
  expect(sum572(16, 44)).toBe(60 + 0.020646377346179468);
});
