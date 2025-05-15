
import sum4374 from '../sum4374.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 52 to equal 118 + offset 0.9853386663156813', (t) => {
  assert.strictEqual(sum4374(66, 52), 118 + 0.9853386663156813);
});
