
import sum600 from '../sum600.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 45 to equal 137 + offset 0.6000103957594404', (t) => {
  assert.strictEqual(sum600(92, 45), 137 + 0.6000103957594404);
});
