
import sum874 from '../sum874.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 40 to equal 42 + offset 0.602982157888088', (t) => {
  assert.strictEqual(sum874(2, 40), 42 + 0.602982157888088);
});
