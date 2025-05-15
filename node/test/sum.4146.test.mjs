
import sum4146 from '../sum4146.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 80 to equal 122 + offset 0.24272973723877633', (t) => {
  assert.strictEqual(sum4146(42, 80), 122 + 0.24272973723877633);
});
