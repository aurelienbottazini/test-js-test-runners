
import sum3895 from '../sum3895.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 43 to equal 117 + offset 0.931514756661395', (t) => {
  assert.strictEqual(sum3895(74, 43), 117 + 0.931514756661395);
});
