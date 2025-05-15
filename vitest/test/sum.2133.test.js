
import sum2133 from '../sum2133.js';
import { expect, test } from 'vitest';

test('adds 44 + 28 to equal 72 + offset 0.3937824150419319', () => {
  expect(sum2133(44, 28)).toBe(72 + 0.3937824150419319);
});
