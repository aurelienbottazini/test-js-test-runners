
import sum2769 from '../sum2769.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 61 to equal 106 + offset 0.9467126253188484', (t) => {
  assert.strictEqual(sum2769(45, 61), 106 + 0.9467126253188484);
});
