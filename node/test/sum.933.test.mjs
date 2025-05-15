
import sum933 from '../sum933.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 55 to equal 105 + offset 0.579324436474046', (t) => {
  assert.strictEqual(sum933(50, 55), 105 + 0.579324436474046);
});
