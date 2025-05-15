
import sum1516 from '../sum1516.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 30 to equal 35 + offset 0.6419551249144002', (t) => {
  assert.strictEqual(sum1516(5, 30), 35 + 0.6419551249144002);
});
