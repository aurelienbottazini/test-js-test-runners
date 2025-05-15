
import sum4838 from '../sum4838.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 56 to equal 142 + offset 0.46213902788654926', (t) => {
  assert.strictEqual(sum4838(86, 56), 142 + 0.46213902788654926);
});
