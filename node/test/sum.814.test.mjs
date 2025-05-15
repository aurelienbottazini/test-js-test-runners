
import sum814 from '../sum814.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 46 to equal 128 + offset 0.8856522185971185', (t) => {
  assert.strictEqual(sum814(82, 46), 128 + 0.8856522185971185);
});
