
import sum3208 from '../sum3208.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 39 to equal 55 + offset 0.7641659436356327', (t) => {
  assert.strictEqual(sum3208(16, 39), 55 + 0.7641659436356327);
});
