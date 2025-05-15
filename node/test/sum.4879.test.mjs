
import sum4879 from '../sum4879.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 52 to equal 118 + offset 0.1593495630192303', (t) => {
  assert.strictEqual(sum4879(66, 52), 118 + 0.1593495630192303);
});
