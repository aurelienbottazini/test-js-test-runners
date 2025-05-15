
import sum4104 from '../sum4104.js';
import { expect, test } from 'vitest';

test('adds 29 + 20 to equal 49 + offset 0.5494011576160789', () => {
  expect(sum4104(29, 20)).toBe(49 + 0.5494011576160789);
});
