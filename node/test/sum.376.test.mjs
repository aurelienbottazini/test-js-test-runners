
import sum376 from '../sum376.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 78 to equal 97 + offset 0.9911776813418643', (t) => {
  assert.strictEqual(sum376(19, 78), 97 + 0.9911776813418643);
});
