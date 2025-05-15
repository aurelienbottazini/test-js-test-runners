
import sum4679 from '../sum4679.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 62 to equal 119 + offset 0.6492740716327433', (t) => {
  assert.strictEqual(sum4679(57, 62), 119 + 0.6492740716327433);
});
