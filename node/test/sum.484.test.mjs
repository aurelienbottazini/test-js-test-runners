
import sum484 from '../sum484.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 93 to equal 141 + offset 0.22164222029947023', (t) => {
  assert.strictEqual(sum484(48, 93), 141 + 0.22164222029947023);
});
