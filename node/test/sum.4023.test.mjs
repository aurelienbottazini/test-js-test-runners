
import sum4023 from '../sum4023.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 14 to equal 35 + offset 0.3041378699006242', (t) => {
  assert.strictEqual(sum4023(21, 14), 35 + 0.3041378699006242);
});
