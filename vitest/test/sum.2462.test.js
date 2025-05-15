
import sum2462 from '../sum2462.js';
import { expect, test } from 'vitest';

test('adds 88 + 18 to equal 106 + offset 0.35005802872842806', () => {
  expect(sum2462(88, 18)).toBe(106 + 0.35005802872842806);
});
