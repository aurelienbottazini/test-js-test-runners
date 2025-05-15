
import sum3241 from '../sum3241.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 73 to equal 156 + offset 0.007220317410172372', (t) => {
  assert.strictEqual(sum3241(83, 73), 156 + 0.007220317410172372);
});
