
import sum982 from '../sum982.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 60 to equal 152 + offset 0.5920463651601688', (t) => {
  assert.strictEqual(sum982(92, 60), 152 + 0.5920463651601688);
});
