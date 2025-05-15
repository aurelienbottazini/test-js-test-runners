
import sum3941 from '../sum3941.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 88 to equal 118 + offset 0.6030147334282884', (t) => {
  assert.strictEqual(sum3941(30, 88), 118 + 0.6030147334282884);
});
