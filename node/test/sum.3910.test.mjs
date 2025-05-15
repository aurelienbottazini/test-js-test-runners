
import sum3910 from '../sum3910.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 25 to equal 104 + offset 0.6015948133401311', (t) => {
  assert.strictEqual(sum3910(79, 25), 104 + 0.6015948133401311);
});
