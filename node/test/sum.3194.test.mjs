
import sum3194 from '../sum3194.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 11 to equal 83 + offset 0.6491211669175674', (t) => {
  assert.strictEqual(sum3194(72, 11), 83 + 0.6491211669175674);
});
