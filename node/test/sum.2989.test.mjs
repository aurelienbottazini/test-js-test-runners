
import sum2989 from '../sum2989.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 22 to equal 94 + offset 0.9186882279927617', (t) => {
  assert.strictEqual(sum2989(72, 22), 94 + 0.9186882279927617);
});
