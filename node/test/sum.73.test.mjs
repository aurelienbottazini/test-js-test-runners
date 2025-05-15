
import sum73 from '../sum73.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 90 to equal 113 + offset 0.5136337690941638', (t) => {
  assert.strictEqual(sum73(23, 90), 113 + 0.5136337690941638);
});
