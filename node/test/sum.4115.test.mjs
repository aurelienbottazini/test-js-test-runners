
import sum4115 from '../sum4115.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 42 to equal 123 + offset 0.54668095261322', (t) => {
  assert.strictEqual(sum4115(81, 42), 123 + 0.54668095261322);
});
