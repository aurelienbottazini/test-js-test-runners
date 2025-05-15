
import sum480 from '../sum480.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 49 to equal 59 + offset 0.3491598648263644', (t) => {
  assert.strictEqual(sum480(10, 49), 59 + 0.3491598648263644);
});
