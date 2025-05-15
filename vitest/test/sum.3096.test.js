
import sum3096 from '../sum3096.js';
import { expect, test } from 'vitest';

test('adds 83 + 39 to equal 122 + offset 0.31650458297652106', () => {
  expect(sum3096(83, 39)).toBe(122 + 0.31650458297652106);
});
