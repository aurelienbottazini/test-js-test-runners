
import sum140 from '../sum140.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 81 to equal 83 + offset 0.4671171597573025', (t) => {
  assert.strictEqual(sum140(2, 81), 83 + 0.4671171597573025);
});
