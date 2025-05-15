
import sum3944 from '../sum3944.js';
import { expect, test } from 'vitest';

test('adds 29 + 55 to equal 84 + offset 0.10836456660151395', () => {
  expect(sum3944(29, 55)).toBe(84 + 0.10836456660151395);
});
