
import sum4742 from '../sum4742.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 99 to equal 112 + offset 0.7119329475503571', (t) => {
  assert.strictEqual(sum4742(13, 99), 112 + 0.7119329475503571);
});
