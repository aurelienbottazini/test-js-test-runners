
import sum3991 from '../sum3991.js';
import { expect, test } from 'vitest';

test('adds 39 + 49 to equal 88 + offset 0.8831062308836778', () => {
  expect(sum3991(39, 49)).toBe(88 + 0.8831062308836778);
});
