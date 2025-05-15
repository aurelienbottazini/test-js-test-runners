
import sum3604 from '../sum3604.js';
import { expect, test } from 'vitest';

test('adds 79 + 14 to equal 93 + offset 0.3050230304155864', () => {
  expect(sum3604(79, 14)).toBe(93 + 0.3050230304155864);
});
