
import sum2700 from '../sum2700.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 42 to equal 53 + offset 0.7797264683989171', (t) => {
  assert.strictEqual(sum2700(11, 42), 53 + 0.7797264683989171);
});
