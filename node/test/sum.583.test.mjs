
import sum583 from '../sum583.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 58 to equal 68 + offset 0.007282084979405634', (t) => {
  assert.strictEqual(sum583(10, 58), 68 + 0.007282084979405634);
});
