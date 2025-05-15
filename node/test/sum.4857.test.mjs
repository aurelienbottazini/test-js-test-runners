
import sum4857 from '../sum4857.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 68 to equal 128 + offset 0.2756184847647377', (t) => {
  assert.strictEqual(sum4857(60, 68), 128 + 0.2756184847647377);
});
