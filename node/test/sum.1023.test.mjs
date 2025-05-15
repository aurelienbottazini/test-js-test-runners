
import sum1023 from '../sum1023.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 98 to equal 134 + offset 0.7224913955653886', (t) => {
  assert.strictEqual(sum1023(36, 98), 134 + 0.7224913955653886);
});
