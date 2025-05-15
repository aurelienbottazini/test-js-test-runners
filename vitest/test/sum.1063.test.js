
import sum1063 from '../sum1063.js';
import { expect, test } from 'vitest';

test('adds 51 + 36 to equal 87 + offset 0.5994432298818172', () => {
  expect(sum1063(51, 36)).toBe(87 + 0.5994432298818172);
});
