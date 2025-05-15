
import sum4843 from '../sum4843.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 4 to equal 58 + offset 0.44262801917721517', (t) => {
  assert.strictEqual(sum4843(54, 4), 58 + 0.44262801917721517);
});
