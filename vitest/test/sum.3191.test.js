
import sum3191 from '../sum3191.js';
import { expect, test } from 'vitest';

test('adds 15 + 76 to equal 91 + offset 0.2931611128110677', () => {
  expect(sum3191(15, 76)).toBe(91 + 0.2931611128110677);
});
