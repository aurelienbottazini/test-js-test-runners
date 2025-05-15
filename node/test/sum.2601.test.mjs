
import sum2601 from '../sum2601.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 19 to equal 70 + offset 0.47021136165689525', (t) => {
  assert.strictEqual(sum2601(51, 19), 70 + 0.47021136165689525);
});
