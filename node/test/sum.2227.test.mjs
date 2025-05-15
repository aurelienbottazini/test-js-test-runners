
import sum2227 from '../sum2227.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 34 to equal 40 + offset 0.19036262843761098', (t) => {
  assert.strictEqual(sum2227(6, 34), 40 + 0.19036262843761098);
});
