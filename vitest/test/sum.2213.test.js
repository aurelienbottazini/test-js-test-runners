
import sum2213 from '../sum2213.js';
import { expect, test } from 'vitest';

test('adds 70 + 91 to equal 161 + offset 0.4533888301252985', () => {
  expect(sum2213(70, 91)).toBe(161 + 0.4533888301252985);
});
