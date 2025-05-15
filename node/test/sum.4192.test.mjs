
import sum4192 from '../sum4192.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 4 to equal 43 + offset 0.9807816233365245', (t) => {
  assert.strictEqual(sum4192(39, 4), 43 + 0.9807816233365245);
});
