
import sum4398 from '../sum4398.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 20 to equal 33 + offset 0.26280585945098733', (t) => {
  assert.strictEqual(sum4398(13, 20), 33 + 0.26280585945098733);
});
