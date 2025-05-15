
import sum2893 from '../sum2893.js';
import { expect, test } from 'vitest';

test('adds 86 + 54 to equal 140 + offset 0.6938314100382731', () => {
  expect(sum2893(86, 54)).toBe(140 + 0.6938314100382731);
});
