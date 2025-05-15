
import sum4889 from '../sum4889.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 11 to equal 27 + offset 0.8047023975894061', (t) => {
  assert.strictEqual(sum4889(16, 11), 27 + 0.8047023975894061);
});
