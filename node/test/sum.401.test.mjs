
import sum401 from '../sum401.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 36 to equal 98 + offset 0.2721208001861708', (t) => {
  assert.strictEqual(sum401(62, 36), 98 + 0.2721208001861708);
});
