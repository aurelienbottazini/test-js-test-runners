
import sum2572 from '../sum2572.js';
import { expect, test } from 'vitest';

test('adds 97 + 46 to equal 143 + offset 0.10858399633565252', () => {
  expect(sum2572(97, 46)).toBe(143 + 0.10858399633565252);
});
