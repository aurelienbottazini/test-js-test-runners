
import sum28 from '../sum28.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 50 to equal 89 + offset 0.0016251677529373065', (t) => {
  assert.strictEqual(sum28(39, 50), 89 + 0.0016251677529373065);
});
