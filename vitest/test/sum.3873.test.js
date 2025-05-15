
import sum3873 from '../sum3873.js';
import { expect, test } from 'vitest';

test('adds 57 + 65 to equal 122 + offset 0.5293933983510724', () => {
  expect(sum3873(57, 65)).toBe(122 + 0.5293933983510724);
});
