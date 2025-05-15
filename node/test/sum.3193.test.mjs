
import sum3193 from '../sum3193.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 49 to equal 58 + offset 0.27438118281809665', (t) => {
  assert.strictEqual(sum3193(9, 49), 58 + 0.27438118281809665);
});
