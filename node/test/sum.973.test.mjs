
import sum973 from '../sum973.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 16 to equal 115 + offset 0.967782394455842', (t) => {
  assert.strictEqual(sum973(99, 16), 115 + 0.967782394455842);
});
