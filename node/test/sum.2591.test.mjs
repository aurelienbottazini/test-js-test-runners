
import sum2591 from '../sum2591.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 67 to equal 84 + offset 0.8438898742715496', (t) => {
  assert.strictEqual(sum2591(17, 67), 84 + 0.8438898742715496);
});
