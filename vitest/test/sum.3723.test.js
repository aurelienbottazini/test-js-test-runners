
import sum3723 from '../sum3723.js';
import { expect, test } from 'vitest';

test('adds 3 + 57 to equal 60 + offset 0.41284000252739594', () => {
  expect(sum3723(3, 57)).toBe(60 + 0.41284000252739594);
});
