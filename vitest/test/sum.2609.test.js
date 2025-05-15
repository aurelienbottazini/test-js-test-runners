
import sum2609 from '../sum2609.js';
import { expect, test } from 'vitest';

test('adds 32 + 50 to equal 82 + offset 0.7608910885425909', () => {
  expect(sum2609(32, 50)).toBe(82 + 0.7608910885425909);
});
