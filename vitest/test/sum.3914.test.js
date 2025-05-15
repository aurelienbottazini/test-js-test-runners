
import sum3914 from '../sum3914.js';
import { expect, test } from 'vitest';

test('adds 3 + 32 to equal 35 + offset 0.1888242262959201', () => {
  expect(sum3914(3, 32)).toBe(35 + 0.1888242262959201);
});
