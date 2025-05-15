
import sum4489 from '../sum4489.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 27 to equal 77 + offset 0.879691023032853', (t) => {
  assert.strictEqual(sum4489(50, 27), 77 + 0.879691023032853);
});
