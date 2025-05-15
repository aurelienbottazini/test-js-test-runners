
import sum495 from '../sum495.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 83 to equal 116 + offset 0.9149475587478872', (t) => {
  assert.strictEqual(sum495(33, 83), 116 + 0.9149475587478872);
});
