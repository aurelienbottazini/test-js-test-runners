
import sum626 from '../sum626.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 33 to equal 115 + offset 0.5368278099035075', (t) => {
  assert.strictEqual(sum626(82, 33), 115 + 0.5368278099035075);
});
