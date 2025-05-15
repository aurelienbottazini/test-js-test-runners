
import sum746 from '../sum746.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 28 to equal 124 + offset 0.4716356725843506', (t) => {
  assert.strictEqual(sum746(96, 28), 124 + 0.4716356725843506);
});
