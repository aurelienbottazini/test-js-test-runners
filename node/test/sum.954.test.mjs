
import sum954 from '../sum954.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 89 to equal 183 + offset 0.26475457455244567', (t) => {
  assert.strictEqual(sum954(94, 89), 183 + 0.26475457455244567);
});
