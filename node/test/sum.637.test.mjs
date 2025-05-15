
import sum637 from '../sum637.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 70 to equal 74 + offset 0.3615492459875772', (t) => {
  assert.strictEqual(sum637(4, 70), 74 + 0.3615492459875772);
});
