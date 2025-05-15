
import sum1941 from '../sum1941.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 25 to equal 35 + offset 0.9061134744931996', (t) => {
  assert.strictEqual(sum1941(10, 25), 35 + 0.9061134744931996);
});
