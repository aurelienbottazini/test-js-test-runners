
import sum4001 from '../sum4001.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 75 to equal 89 + offset 0.3560963561219558', (t) => {
  assert.strictEqual(sum4001(14, 75), 89 + 0.3560963561219558);
});
