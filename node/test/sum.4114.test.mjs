
import sum4114 from '../sum4114.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 40 to equal 130 + offset 0.29746398977042954', (t) => {
  assert.strictEqual(sum4114(90, 40), 130 + 0.29746398977042954);
});
