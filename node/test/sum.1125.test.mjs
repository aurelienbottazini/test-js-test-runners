
import sum1125 from '../sum1125.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 79 to equal 120 + offset 0.8962552873809598', (t) => {
  assert.strictEqual(sum1125(41, 79), 120 + 0.8962552873809598);
});
