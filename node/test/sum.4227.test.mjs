
import sum4227 from '../sum4227.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 26 to equal 69 + offset 0.3890713788923724', (t) => {
  assert.strictEqual(sum4227(43, 26), 69 + 0.3890713788923724);
});
