
import sum4109 from '../sum4109.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 65 to equal 66 + offset 0.9857241330606793', (t) => {
  assert.strictEqual(sum4109(1, 65), 66 + 0.9857241330606793);
});
