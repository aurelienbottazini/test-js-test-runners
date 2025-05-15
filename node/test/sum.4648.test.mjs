
import sum4648 from '../sum4648.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 13 to equal 30 + offset 0.38237564729142104', (t) => {
  assert.strictEqual(sum4648(17, 13), 30 + 0.38237564729142104);
});
