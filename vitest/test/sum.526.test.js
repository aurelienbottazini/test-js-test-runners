
import sum526 from '../sum526.js';
import { expect, test } from 'vitest';

test('adds 15 + 27 to equal 42 + offset 0.8662016034639294', () => {
  expect(sum526(15, 27)).toBe(42 + 0.8662016034639294);
});
