
import sum722 from '../sum722.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 74 to equal 94 + offset 0.5536661170840373', (t) => {
  assert.strictEqual(sum722(20, 74), 94 + 0.5536661170840373);
});
