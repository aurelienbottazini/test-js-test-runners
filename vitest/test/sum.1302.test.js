
import sum1302 from '../sum1302.js';
import { expect, test } from 'vitest';

test('adds 20 + 3 to equal 23 + offset 0.46353629787111816', () => {
  expect(sum1302(20, 3)).toBe(23 + 0.46353629787111816);
});
