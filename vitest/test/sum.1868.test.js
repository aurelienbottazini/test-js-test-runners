
import sum1868 from '../sum1868.js';
import { expect, test } from 'vitest';

test('adds 91 + 84 to equal 175 + offset 0.04494979501059926', () => {
  expect(sum1868(91, 84)).toBe(175 + 0.04494979501059926);
});
