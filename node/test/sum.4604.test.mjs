
import sum4604 from '../sum4604.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 82 to equal 174 + offset 0.3686358187788714', (t) => {
  assert.strictEqual(sum4604(92, 82), 174 + 0.3686358187788714);
});
