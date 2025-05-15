
import sum3045 from '../sum3045.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 67 to equal 83 + offset 0.8931669455657675', (t) => {
  assert.strictEqual(sum3045(16, 67), 83 + 0.8931669455657675);
});
