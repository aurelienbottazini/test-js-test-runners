
import sum4024 from '../sum4024.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 36 to equal 129 + offset 0.151904533343455', (t) => {
  assert.strictEqual(sum4024(93, 36), 129 + 0.151904533343455);
});
