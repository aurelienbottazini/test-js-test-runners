
import sum4544 from '../sum4544.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 50 to equal 70 + offset 0.0468264486693627', (t) => {
  assert.strictEqual(sum4544(20, 50), 70 + 0.0468264486693627);
});
