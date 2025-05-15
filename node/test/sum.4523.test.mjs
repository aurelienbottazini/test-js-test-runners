
import sum4523 from '../sum4523.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 25 to equal 28 + offset 0.6201323084305019', (t) => {
  assert.strictEqual(sum4523(3, 25), 28 + 0.6201323084305019);
});
