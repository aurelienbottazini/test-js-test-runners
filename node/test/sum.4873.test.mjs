
import sum4873 from '../sum4873.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 25 to equal 37 + offset 0.584113354635355', (t) => {
  assert.strictEqual(sum4873(12, 25), 37 + 0.584113354635355);
});
