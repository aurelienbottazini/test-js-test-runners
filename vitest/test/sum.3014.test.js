
import sum3014 from '../sum3014.js';
import { expect, test } from 'vitest';

test('adds 55 + 54 to equal 109 + offset 0.10835410385093236', () => {
  expect(sum3014(55, 54)).toBe(109 + 0.10835410385093236);
});
