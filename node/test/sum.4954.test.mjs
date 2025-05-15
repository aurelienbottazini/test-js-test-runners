
import sum4954 from '../sum4954.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 62 to equal 139 + offset 0.03788349354994536', (t) => {
  assert.strictEqual(sum4954(77, 62), 139 + 0.03788349354994536);
});
