
import sum45 from '../sum45.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 42 to equal 104 + offset 0.6894989593934356', (t) => {
  assert.strictEqual(sum45(62, 42), 104 + 0.6894989593934356);
});
