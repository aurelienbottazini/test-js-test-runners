
import sum660 from '../sum660.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 50 to equal 136 + offset 0.8990145603436899', (t) => {
  assert.strictEqual(sum660(86, 50), 136 + 0.8990145603436899);
});
