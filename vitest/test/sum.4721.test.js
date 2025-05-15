
import sum4721 from '../sum4721.js';
import { expect, test } from 'vitest';

test('adds 78 + 65 to equal 143 + offset 0.40889656892911863', () => {
  expect(sum4721(78, 65)).toBe(143 + 0.40889656892911863);
});
