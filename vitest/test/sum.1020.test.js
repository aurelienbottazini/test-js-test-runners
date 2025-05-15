
import sum1020 from '../sum1020.js';
import { expect, test } from 'vitest';

test('adds 67 + 78 to equal 145 + offset 0.31225003742713997', () => {
  expect(sum1020(67, 78)).toBe(145 + 0.31225003742713997);
});
