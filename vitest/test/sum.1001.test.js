
import sum1001 from '../sum1001.js';
import { expect, test } from 'vitest';

test('adds 68 + 16 to equal 84 + offset 0.4730206597012794', () => {
  expect(sum1001(68, 16)).toBe(84 + 0.4730206597012794);
});
