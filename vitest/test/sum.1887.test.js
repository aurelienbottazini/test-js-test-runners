
import sum1887 from '../sum1887.js';
import { expect, test } from 'vitest';

test('adds 19 + 65 to equal 84 + offset 0.8405887199337515', () => {
  expect(sum1887(19, 65)).toBe(84 + 0.8405887199337515);
});
