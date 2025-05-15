
import sum650 from '../sum650.js';
import { expect, test } from 'vitest';

test('adds 7 + 0 to equal 7 + offset 0.17589524388038147', () => {
  expect(sum650(7, 0)).toBe(7 + 0.17589524388038147);
});
