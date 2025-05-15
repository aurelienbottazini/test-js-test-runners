
import sum309 from '../sum309.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 39 to equal 116 + offset 0.5047619502439176', (t) => {
  assert.strictEqual(sum309(77, 39), 116 + 0.5047619502439176);
});
